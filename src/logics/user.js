const notNode = require('not-node');
const phrase = require('not-locale').modulePhrase('not-user');
const Log = require('not-log')(module, 'user:logics');
const {
	notValidationError,
	notRequestError
} = require('not-error');

const MODEL_NAME = 'User';
exports.thisLogicName = MODEL_NAME;


exports[MODEL_NAME] = class UserLogic {
	/**
	 *  Creates User document from input
	 */
	static async createNewUserDocument(data) {
		Log.debug('UserLogic//createNewUserDocument');
		const notApp = notNode.Application;
		const User = notApp.getModel('User');
		const userID = await notNode.Increment.next(MODEL_NAME);
		let newUser = new User({
			...data,
			userID
		});
		//validate safety of data
		await newUser.validate();
		//user key data is not duplicating another
		let unique = await User.isUnique(newUser.username, newUser.email);
		if (unique !== true) {
			const validationErrors = {};
			if (!unique.username) {
				validationErrors.username = [phrase('username_taken')];
			}
			if (!unique.email) {
				validationErrors.email = [phrase('email_taken')];
			}
			throw new notRequestError(
				phrase('user_uniqueness_verification_error'),
				{errors: validationErrors}
			);
		}
		//saving
		await User.add(newUser);
		return newUser;
	}

	/**
	 *  Creating new user document and returning {status: 'ok'}
	 * in case of error throws exception Error, notRequestError, notValidationError
	 **/
	static async register(data) {
		Log.debug('UserLogic//register');
		let newUser = await UserLogic.createNewUserDocument({
			...data
		});
		await notNode.Application.getLogic('not-user//UserMailer').sendConfirmationEmail({user: newUser});
		Log.log({
			module: 	'user',
			logic: 		'User',
			action: 	'register',
			by: 			newUser._id,
			target: 	newUser._id,
			targetID: newUser.userID
		});
		return {
			status: 'ok'
		};
	}

	/**
	 *  Validating oneTimeCode, reddeming and confirming linked user email
	 *	and returning {status: 'ok'}
	 * 	in case of error throws exception Error, notRequestError, notValidationError
	 * 	@param {string}	code	uuidv4 code
	 *	@returns {object}	operation result
	 **/
	static async confirmEmail(code){
		Log.debug('UserLogic//confirmEmail');
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User'),
			OneTimeCode = notApp.getModel('OneTimeCode');
		const oneTimeCode = await OneTimeCode.findValid(code);
		if (oneTimeCode && oneTimeCode.payload.action === 'confirmEmail') {
			await oneTimeCode.redeem();
		} else {
			throw new notValidationError(phrase('one_time_code_not_valid'));
		}
		const user = await User.findById(oneTimeCode.payload.owner);
		await user.confirmEmail();
		return {
			status: 	'ok'
		};
	}

	static async profile({activeUser}){
		Log.debug('UserLogic//profile');
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User');
		let user = await User.getOne(activeUser._id);
		return {
			status: 'ok',
			result: User.clearFromUnsafe(user.toObject(), activeUser.role)
		};
	}

	static checkUserSupremacy({
		activeUser,
		targetUser,
		ip
	}){
		Log.debug('UserLogic//checkUserSupremacy');
		//если не владелец
		if (targetUser._id !== activeUser._id) {
			if(activeUser.isRoot() && !targetUser.isRoot()){
				return;
			}
			const AuthLogic = notNode.Application.getLogic('not-user//Auth');
			//и не админ, а цель ниже по уровню
			if (! AuthLogic.userHaveSupremacy(activeUser, targetUser) ) {
				//репортим попытку доступа к запрещенным данным
				throw new notRequestError(
					'UserLogic modification operation: insufficient_level_of_privilegies',
					{
						code: 405,
						error: phrase('insufficient_level_of_privilegies'),
						ip,
						activeUserId: activeUser._id,
						targetUserId: targetUser._id
					}
				);
			}
		}
	}

	static async loadUser(targetId){
		Log.debug('UserLogic//loadUser');
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User');
		let targetUser = await User.findOne({
			_id: targetId,
			__latest: true,
			__closed: false
		}).exec();
		if (!targetUser) {
			throw new notRequestError(
				phrase('user_not_found'),
				{
					code: 200,
					error: phrase('user_not_found')
				}
			);
		}
		return targetUser;
	}

	static async update({targetUserId, activeUser, data, ip}){
		Log.debug('UserLogic//update');
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User');
		let targetUser = await UserLogic.loadUser(targetUserId);
		UserLogic.checkUserSupremacy({
			activeUser,
			targetUser,
			ip
		});
		//rights is ok
		await User.Update(data, activeUser.role, activeUser._id);
		Log.log({
			module: 	'user',
			logic: 		'User',
			action: 	'update',
			actorId: 		activeUser._id,
			actorRole: 	activeUser.role,
			targetId: 		targetUser._id,
			targetRole: 	targetUser.role,
		});
		//if no errors
		return {
			status: 'ok'
		};
	}

	static async createUser({activeUser, data, ip}){
		Log.debug('UserLogic//createUser');
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User');
		let targetUser = await UserLogic.createNewUserDocument({
			...data
		});
		await notNode.Application.getLogic('not-user//UserMailer').sendConfirmationEmail({user: targetUser});
		Log.log({
			module: 	'user',
			logic: 		'User',
			action: 	'createUser',
			actorId: 		activeUser._id,
			actorRole: 	activeUser.role,
			targetId: 		targetUser._id,
			targetRole: 	targetUser.role,
			ip
		});
		return {
			status: 'ok',
			result: User.clearFromUnsafe(targetUser.toObject())
		};
	}


	static checkAgainstSuicide({targetUserId, activeUserId}){
		if (targetUserId === activeUserId) {
			throw new notRequestError(
				phrase('user_cant_delete_his_own_account'),
				{
					code: 403,
					error:phrase('user_cant_delete_his_own_account')
				}
			);
		}
	}

	static async delete({targetUserId, ip, activeUser}){
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User');
		UserLogic.checkAgainstSuicide();
		const targetUser = await User.findOne({
			_id: targetUserId,
			__latest: true,
			__closed: false
		}).exec();
		//if user exist, then mark current document version as closed
		if (targetUser) {
			UserLogic.checkUserSupremacy({
				activeUser,
				targetUser,
				ip
			});
			await targetUser.close();
			Log.log({
				module: 	'user',
				logic: 		'User',
				action: 	'createUser',
				actorId: 		activeUser._id,
				actorRole: 	activeUser.role,
				targetId: 		targetUser._id,
				targetRole: 	targetUser.role,
				ip
			});
		}
		return {
			status: 'ok'
		};
	}

	static async get({
		activeUser,
		targetUserId,
		ip
	}){
		Log.debug('UserLogic//get');
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User');
		//if user not quering his own info, check rights
		if ((targetUserId !== activeUser._id)){
			UserLogic.checkUserSupremacy({
				activeUser,
				targetUser,
				ip
			});
		}
		const targetUser = User.getOne(targetUserId);
		const data = User.clearFromUnsafe(targetUser.toObject());
		return {
			status: 'ok',
			result: data
		};
	}

};
