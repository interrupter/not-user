const
	UserActions = [],
	AdminActions = [
		'listAndCount'
	],
	MODEL_NAME = 'User',
	MODEL_OPTIONS = {
		MODEL_NAME,
		MODEL_TITLE: 'Пользователь',
		populate: {
			listAndCount: ['key']
		}
	},
	modMeta = require('not-meta');

const
	notNode = require('not-node'),
	{objHas} = require('not-node').Common,
	Log = require('not-log')(module, 'User/Routes'),
	config = require('not-config').readerForModule('user');


function getLogic(){
	const notApp = notNode.Application;
	return notApp.getLogic('not-user//User');
}

function getAuthLogic(){
	const notApp = notNode.Application;
	return notApp.getLogic('not-user//Auth');
}

exports.before = async (req, res, next) => {
	const name = req.notRouteData.actionName;
	Log.log('action name', name);
	const FormValidator = notNode.Application.getForm(['not-user', name].join('//'));
	if (FormValidator){
		Log.log('FormValidator: ', FormValidator.FORM_NAME);
		return await FormValidator.run(req, res, next);
	}else{
		Log.log('no form validator');
		return {};
	}
};


exports.after = (req, res, next, result)=>{
	if(res.headersSent){return;}
	if(result && objHas(result, '__redirect__')){
		res.status(200).redirect(result.__redirect__);
	}else{
		res.status(200).json({
			status: 'ok',
			result
		});
	}
};

/**
 *   Guest actions
 **/
exports.register = async (req, res, next, prepared) => {
	Log.debug('register');
	return await (getLogic().register(prepared));
};

exports.confirmEmail = async (req, res, next, prepared) => {
	Log.debug('confirmEmail');
	await (getLogic().confirmEmail(prepared.code));
	//!TODO change redirect destination to specific page with success message
	return {__redirect__:'/login'};
};

exports.login = async (req, res, next, prepared) => {
	const user = await (getAuthLogic().login(prepared));
	notNode.Auth.setAuth(req, user._id, user.role);
	req.session.save();
	Log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role}`);
	return user;
};

exports.requestLoginCodeOnEmail = async (req, res, next, prepared) => {
	Log.debug('request login by code from email');
	await (getAuthLogic().requestLoginCodeOnEmail(prepared));
};

exports.loginByCode = async (req, res, next, prepared) => {
	Log.debug('login by code from email or sms');
	const user = await (getAuthLogic().loginByCode(prepared));
	notNode.Auth.setAuth(req, user._id, user.role);
	req.session.save();
	Log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role} via emailed/smsed one-time code`);
	return {__redirect__:'/'};
};

exports.requestPasswordReset = async (req, res, next, prepared) => {
	Log.debug('user/requestPasswordReset');
	return await (getAuthLogic().requestPasswordReset(prepared));
};

exports.resetPassword = async (req, res, next, prepared) => {
	Log.debug('user/resetPassword');
	await (getAuthLogic().resetPassword(prepared));
	return {__redirect__:'/resetPasswordSuccess'};
};

/**
 *   Authorized user actions
 */
exports._logout = exports.logout = (req) => {
	Log.debug('user/(_)logout');
	notNode.Auth.setGuest(req);
};

exports._changePassword = exports.changePassword = async (req, res, next, prepared) => {
	Log.debug('user/(_)changePassword');
	return await (getAuthLogic().changePassword({
		user: req.user,
		...prepared
	}));

};

exports.token = async (req) => {
	Log.debug('user/token');
	const secret = config.get('secret');
	let tokenTTL = config.get('tokenTTL');
	const params = {
		secret,
		tokenTTL,
		ip: notNode.Auth.getIP(req),
	};
	if(notNode.Auth.isUser(req)){
		params.user = req.user;
	}
	return await (getAuthLogic().token(params));
};

exports.profile = async (req) => {
	Log.debug('user/profile');
	return await (getLogic().profile({
		activeUser: req.user,
		ip: notNode.Auth.getIP(req),
	}));
};

exports.update = async (req, res, next, prepared) => {
	Log.debug('user.update');
	return await (getLogic().update(prepared));
};

exports.status = async (req) => {
	return notNode.Auth.extractAuthData(req);
};

/**
 *   Admin actions
 */
exports._create = async (req, res, next, prepared) => {
	Log.debug('user._create');
	return await (getLogic().createUser(prepared));
};

exports._steal = (/*req, res*/) => {
	return {};
};

exports._update = async (req, res, next, prepared) => {
	Log.log('user/_update');
	return await (getLogic().update(prepared));
};

exports._delete = async (req, res, next, prepared) => {
	Log.log('user/_delete');
	return await (getLogic().delete(prepared));
};

exports.get = async (req, res, next, prepared) => {
	Log.log('user/get');
	return await (getLogic().get(prepared));
};

exports._get = async (req, res, next, prepared) => {
	Log.log('user/_get');
	return await (getLogic().get(prepared));
};

modMeta.extend(modMeta.Route, module.exports, AdminActions, MODEL_OPTIONS, '_');
modMeta.extend(modMeta.Route, module.exports, UserActions, MODEL_OPTIONS);
