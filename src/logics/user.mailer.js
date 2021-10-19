/**
* Collection of mailing operations for User
*/

const notNode = require('not-node');

const MODEL_NAME = 'UserMailer';
exports.thisLogicName = MODEL_NAME;

exports[MODEL_NAME] = class UserMailerLogic {
	static async sendConfirmationEmail({user}) {
		const notApp = notNode.Application;
		const OneTimeCode = notApp.getModel('OneTimeCode');
		let oneTimeCode = await OneTimeCode.createCode(
			{
				email: user.email,
				owner: user._id,
				action: 'confirmEmail'
			},
			60 /* TTL == 60 minutes */
		);
		notApp.inform({
			reciever: {
				email: user.email,
			},
			tags: ['userEmailConfirmationLink'],
			link: `/api/user/confirmEmail?code=${oneTimeCode.code}&`
		});
	}

	static async sendOneTimeLoginCode({user}){
		const notApp = notNode.Application;
		const OneTimeCode = notApp.getModel('OneTimeCode');
		const code = await OneTimeCode.createCode({
			email: user.email,
			owner: user._id,
			action: 'loginByCode'
		});
		notNode.Application.inform({
			reciever:{
				email: user.email
			},
			tags: ['userOneTimeLoginLink'],
			link: `/api/user/loginByCode?code=${code.code}&`
		});
	}

	static async sendPasswordRestorationCode({user}){
		const notApp = notNode.Application;
		const OneTimeCode = notApp.getModel('OneTimeCode');
		const oneTimeCode = await OneTimeCode.createCode(
			{
				email: user.email,
				owner: user._id,
				action: 'resetPassword'
			});
		notApp.inform(
			{
				reciever:{
					email: user.email,
				},
				tags: ['userPasswordReset'],
				link: `/api/user/resetPassword?code=${oneTimeCode.code}`
			}
		);
	}

	static async sendNewPassword({user, pass}){
		const notApp = notNode.Application;
		notApp.inform({
			reciever:{
				email: user.email,
			},
			tags: ['userPasswordNew'],
			pass
		});
	}

	static async sendChangePasswordNotification({user}){
		const notApp = notNode.Application;
		notApp.inform({
			reciever:{
				email: user.email
			},
			tags: ['userChangePasswordNotification']
		});
	}
};
