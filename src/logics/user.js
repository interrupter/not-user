const notNode = require('not-node');
const Log = require('not-log')(module, 'user:logics');
const {
	notError
} = require('not-error');

const MODEL_NAME = 'User';
exports.thisLogicName = MODEL_NAME;

const getIP = notNode.Auth.getIP;

class UserLogic {
	static async register(data, ip){
		const notApp = notNode.Application;
		try{
			Log.debug('register');
			let User = notApp.getModel('User'),
				OneTimeCode = notApp.getModel('OneTimeCode'),
				userID = await notNode.Increment.next(MODEL_NAME),
				newUser = new User({
					userID,
					username: 	data.username,
					email: 			data.email,
					password: 	data.password,
					ip
				});
			await newUser.validate();
			let unique  = await User.isUnique(newUser.username, newUser.email);
			if (unique) {
				await User.add(newUser);
			} else {
				throw new notError(
					'not-user:user_uniqueness_verification_error',
					{
						username: newUser.username,
						email: newUser.email
					}
				);
			}
			let oneTimeCode = await OneTimeCode.createCode({
				email: newUser.email,
				owner: newUser._id,
				action: 'confirmEmail'
			},
			60 /* TTL == 60 minutes */
			);
			notApp.inform({
				reciever:{
					email: newUser.email,
				},
				tags: ['userEmailConfirmationLink'],
				link: `/api/user/confirmEmail?code=${oneTimeCode.code}&`
			});
			return {
				status: 'ok'
			};
		}catch(e){
			notApp.report(e);
			return {
				status: 'error',
				error: 'not-user:some_error'
			};
		}
	}


	static async get({
		locale
	}){
		try{
			let result = notLocale.get(locale);
			return {
				status: 'ok',
				result
			};
		}catch(err){
			Log.error(err);
			notNode.Application.report(
				new notError(
					`locale:logic.get`,
					{locale},
					err
				)
			);
			return {
				status: 'error',
				error:  err.message
			};
		}
	}

	static async available() {
		try{
			let result = notLocale.available();
			return {
				status: 'ok',
				result
			};
		}catch(err){
			Log.error(err);
			notNode.Application.report(
				new notError(
					`locale:logic.available`,
					{},
					err
				)
			);
			return {
				status: 'error',
				error:  err.message
			};
		}
	}

}

exports[MODEL_NAME] = UserLogic;
