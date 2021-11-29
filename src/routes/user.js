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
	try{
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
	}catch(e){
		next(e);
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
	try {
		Log.debug('register');
		return await (getLogic().register(prepared));
	}catch(e){
		next(e);
	}
};

exports.confirmEmail = async (req, res, next, prepared) => {
	try {
		Log.debug('confirmEmail');
		await (getLogic().confirmEmail(prepared.code));
		//!TODO change redirect destination to specific page with success message
		return {__redirect__:'/login'};
	} catch (e) {
		next(e);
	}
};

exports.login = async (req, res, next, prepared) => {
	try{
		const user = await (getAuthLogic().login(prepared));
		notNode.Auth.setAuth(req, user._id, user.role);
		req.session.save();
		Log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role}`);
		return user;
	}catch(e){
		next(e);
	}
};

exports.requestLoginCodeOnEmail = async (req, res, next, prepared) => {
	try{
		Log.debug('request login by code from email');
		await (getAuthLogic().requestLoginCodeOnEmail(prepared));
	}catch(e){
		next(e);
	}
};

exports.loginByCode = async (req, res, next, prepared) => {
	try{
		Log.debug('login by code from email or sms');
		const user = await (getAuthLogic().loginByCode(prepared));
		notNode.Auth.setAuth(req, user._id, user.role);
		req.session.save();
		Log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role} via emailed/smsed one-time code`);
		return {__redirect__:'/'};
	}catch(e){
		next(e);
	}
};

exports.requestPasswordReset = async (req, res, next, prepared) => {
	try{
		Log.debug('user/requestPasswordReset');
		return await (getAuthLogic().requestPasswordReset(prepared));
	}catch(e){
		next(e);
	}
};

exports.resetPassword = async (req, res, next, prepared) => {
	try{
		Log.debug('user/resetPassword');
		await (getAuthLogic().resetPassword(prepared));
		return {__redirect__:'/resetPasswordSuccess'};
	}catch(e){
		next(e);
	}
};

/**
 *   Authorized user actions
 */
exports._logout = exports.logout = (req, res, next) => {
	try{
		Log.debug('user/(_)logout');
		notNode.Auth.setGuest(req);
	}catch(e){
		next(e);
	}
};

exports._changePassword = exports.changePassword = async (req, res, next, prepared) => {
	try{
		Log.debug('user/(_)changePassword');
		return await (getAuthLogic().changePassword({
			user: req.user,
			...prepared
		}));
	}catch(e){
		next(e);
	}
};

exports.token = async (req, res, next) => {
	try{
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
	}catch(e){
		next(e);
	}
};

exports.profile = async (req, res, next) => {
	Log.debug('user/profile');
	try{
		return await (getLogic().profile({
			user: req.user,
			ip: notNode.Auth.getIP(req),
		}));
	}catch(e){
		next(e);
	}
};

exports.update = async (req, res, next, prepared) => {
	Log.debug('user.update');
	try{
		return await (getLogic().update(prepared));
	}catch(e){
		next(e);
	}
};

exports.status = async (req, res, next) => {
	try{
		return notNode.Auth.extractAuthData(req);
	}catch(e){
		next(e);
	}
};


/**
 *   Admin actions
 */
exports._create = async (req, res, next, prepared) => {
	try {
		Log.debug('user._create');
		return await (getLogic().createUser(prepared));
	}catch(e){
		next(e);
	}
};

exports._steal = (/*req, res*/) => {
	return {};
};

exports._update = async (req, res, next, prepared) => {
	try{
		Log.log('user/_update');
		return await (getLogic().update(prepared));
	}catch(e){
		next(e);
	}
};

exports._delete = async (req, res, next, prepared) => {
	try{
		Log.log('user/_delete');
		return await (getLogic().delete(prepared));
	}catch(e){
		console.log(e);
		next(e);
	}
};

exports.get = async (req, res, next, prepared) => {
	try{
		Log.log('user/get');
		return await (getLogic().get(prepared));
	}catch(e){
		next(e);
	}
};

exports._get = async (req, res, next, prepared) => {
	try{
		Log.log('user/_get');
		return await (getLogic().get(prepared));
	}catch(e){
		next(e);
	}
};

modMeta.extend(modMeta.Route, module.exports, AdminActions, MODEL_OPTIONS, '_');
modMeta.extend(modMeta.Route, module.exports, UserActions, MODEL_OPTIONS);
