const notNode = require('not-node');
const Log = require('not-log')(module, 'User/Logics/Auth');
const config = require('not-config').readerForModule('user');
const phrase = require('not-locale').modulePhrase('not-user');
const {
	notValidationError,
	notRequestError
} = require('not-error');
const JWT = require('jsonwebtoken');

const MODEL_NAME = 'Auth';
exports.thisLogicName = MODEL_NAME;

function validateEmail(email){
	try{
		const User = notNode.Application.getModel('not-user//User');
		if (!User.validateEmail(email)){
			throw new Error(phrase('email_not_valid'));
		}
	}catch(e){
		throw new notValidationError(phrase('email_not_valid'), {email: [phrase('email_not_valid')]});
	}
}

const TOKEN_TTL = 3600;

exports[MODEL_NAME] = class AuthLogic {

	static async login({password, email, ip}){
		const User = notNode.Application.getModel('not-user//User');
		validateEmail(email);
		if (!User.validatePassword(password)) {
			throw new notRequestError(
				phrase('password_length_not_valid'),
				{
					code:403,
					//error messages
					errors:{
						password: [phrase('password_length_not_valid')]
					}
				}
			);
		}
		let user = await User.authorize(email, password);
		user.ip = ip;
		await user.save();
		return User.clearFromUnsafe(user.toObject());
	}

	static async requestLoginCodeOnEmail({email}){
		const User = notNode.Application.getModel('not-user//User');
		validateEmail(email);
		const user = await User.getByEmail(email);
		if (!user) {
			throw new notRequestError(phrase('user_not_found'), {code:403});
		}
		await notNode.Application.getLogic('not-user//UserMailer').sendOneTimeLoginCode({user});
		return {
			status: 'ok',
			message: phrase('request_login_by_link_success')
		};
	}

	static async loginByCode({code, ip}){
		const User = notNode.Application.getModel('not-user//User');
		const OTCLogic = notNode.Application.getLogic('not-user//OneTimeCode');
		const oneTimeCode = await OTCLogic.retrieveAndRedeemOTCFor(code, 'loginByCode');
		const user = await User.findById(oneTimeCode.payload.owner);
		user.ip = ip;
		await user.save();
		return User.clearFromUnsafe(user.toObject());
	}

	static async requestPasswordReset({email}){
		let User = notNode.Application.getModel('not-user//User');
		validateEmail(email);
		const user = User.getByEmail(email);
		await notNode.Application.getLogic('not-user//UserMailer')
			.sendPasswordResetCode(user);
		return {
			status: 'ok',
			message: phrase('request_password_reset_success_link')
		};
	}

	static async resetPassword({code}){
		try{
			const User = notNode.Application.getModel('not-user//User');
			const oneTimeCode = await	notNode.Application.getLogic('not-user//OneTimeCode').retrieveAndRedeemOTCFor(code,'resetPassword');

			let user = await User.findById(oneTimeCode.payload.owner);
			if (!user) {
				throw new notRequestError(phrase('user_not_found'), {code:403});
			}
			const pass = user.createNewPassword();
			await user.save();
			await notNode.Application.getLogic('not-user//UserMailer').sendNewPassword({user, pass});
			Log.info(`'${user.username}' reseted password as ${user._id} ${user.role} via emailed one-time code`);
			return {
				status: 'ok'
			};
		}catch(e){
			throw new notRequestError(e.message,
				{
					code: 500,
					redirect: '/resetPasswordError'
				},
				e
			);
		}
	}


	static checkUserPassword({user, pass, context}){
		if (!user.checkPassword(pass)){
			throw new notRequestError(
				phrase('password_incorrect'),
				{
					...context,
					code: 	403,
					errors:{
						oldPassword: [phrase('password_incorrect')]
					}
				}
			);
		}
	}

	static validatePasswordFormat({password, context}){
		const User = notNode.Application.getModel('not-user//User');
		if (!User.validatePassword(password)) {
			throw new notRequestError(
				phrase('password_length_not_valid'),
				{
					...context,
					code: 403,
					errors: {
						newPassword: [phrase('password_length_not_valid')]
					}
				});
		}
	}

	static async changePassword({user, oldPass, newPass, ip}){
		const context = {
			userId: user._id,
			role: 	user.getPrimaryRole(),
			ip
		};
		AuthLogic.checkUserPassword({user, pass: oldPass, context});
		AuthLogic.validatePasswordFormat({password: newPass, context});
		user.password = newPass;
		await user.save();
		await notNode.Application.getLogic('not-user//UserMailer').sendChangePasswordNotification({user});
		Log.info(`'${user.username}' changed password as ${user._id} ${user.role} via entering old password and new one`);
		return {
			status: 'ok'
		};
	}

	static validateSecretForToken({secret,context}){
		if (
			!secret ||
			typeof secret === 'undefined' ||
			secret === null ||
			secret === ''
		) {
			throw new notRequestError(
				phrase('user_token_secret_not_valid'),
				{
					...context,
					code:500,
				}
			);
		}
	}

	static validateTTLForToken(tokenTTL){
		if (!(tokenTTL > 0) || isNaN(tokenTTL)) {
			Log.log(phrase('user_token_ttl_not_set'));
			tokenTTL = AuthLogic.TOKEN_TTL;
		}
		return tokenTTL;
	}

	static composeUserTokenPayload({user, tokenTTL}){
		return {
			_id:       					user._id,
			username: 					user.username,
			email:     					user.email,
			emailConfirmed: 		user.emailConfirmed,
			telephone: 					user.telephone,
			telephoneConfirmed: user.telephoneConfirmed,
			created: 						user.created,
			role: 							user.role,
			active: 						user.active,
			country: 						user.country,
			exp: 								Date.now() / 1000 + tokenTTL
		};
	}

	static composeGuestTokenPayload({tokenTTL}){
		return {
			active:     	true,
			_id:        	false,
			username:   	phrase('user_role_guest'),
			role:       	notNode.Auth.DEFAULT_USER_ROLE_FOR_GUEST,
			exp:        	Date.now() / 1000 + tokenTTL
		};
	}

	static async token({
		secret,
		tokenTTL,
		ip,
		user
	}){
		const context = {ip};
		AuthLogic.validateSecretForToken({secret, context});
		AuthLogic.validateTTLForToken(tokenTTL);
		let payload = {};
		if(user){
			payload = AuthLogic.composeUserTokenPayload({user, tokenTTL});
		}else{
			payload = AuthLogic.composeGuestTokenPayload({tokenTTL});
		}
		return {
			token: JWT.sign(payload, secret)
		};
	}

	/**
	*	First have role based security rights supremacy over second
	*/
	static userHaveSupremacy(activeUser, targetUser){
		const notApp = notNode.Application;
		const User = notApp.getModel('not-user//User');
		//stronger -> weaker
		const rolesPriority = config.get('roles:priority') || User.DEFAULT_ROLES_LIST;
		return (
			//active user should be admin or root
			notNode.Auth.compareRoles(activeUser.role, ['root', 'admin'], false) &&
			//target should be lower
			notNode.Auth.checkSupremacy(activeUser.role, targetUser.role, rolesPriority)
		);
	}

};

exports[MODEL_NAME].TOKEN_TTL = TOKEN_TTL;
