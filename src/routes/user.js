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
	notAuth = require('not-node').Auth,
	getIP = notAuth.getIP,
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

/**
 *   Guest actions
 */

exports.register = async (req, res, next) => {
	try {
		Log.debug('register');
		const  ip = getIP(req);
		let result = await (getLogic().register({
			username:   req.body.username,
			email:       req.body.email,
			password:   req.body.password,
			ip
		}));
		res.status(200).json(result);
	}catch(e){
		Log.error(e);
		next(e);
	}
};

exports.confirmEmail = async (req, res, next) => {
	try {
		Log.debug('confirmEmail');
		const code = req.query.code;
		await (getLogic().confirmEmail(code));
		//!TODO change redirect destination to specific page with success message
		res.redirect('/login');
	} catch (e) {
		next(e);
	}
};

exports.login = async (req, res, next) => {
	try{
		const notApp = notNode.Application;
		notApp.log('login');
		const
			email = req.body.email,
			password = req.body.password,
			ip = getIP(req);
		const user = await (getAuthLogic().login({email, password, ip}));
		notNode.Auth.setAuth(req, user._id, user.role);
		req.session.save();
		Log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role}`);
		res.status(200).json({
			status: 'ok',
			result: user
		});
	}catch(e){
		next(e);
	}
};

exports.requestLoginCodeOnEmail = async (req, res, next) => {
	try{
		Log.debug('request login by code from email');
		const email = req.body.email;
		const result = await (getAuthLogic().requestLoginCodeOnEmail({email}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports.loginByCode = async (req, res, next) => {
	try{
		Log.debug('login by code from email or sms');
		const code = req.query.code,
			ip = getIP(req);
		const user = await (getAuthLogic().loginByCode({code, ip}));
		notNode.Auth.setAuth(req, user._id, user.role);
		req.session.save();
		Log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role} via emailed/smsed one-time code`);
		res.status(200).redirect('/');
	}catch(e){
		next(e);
	}
};

exports.requestPasswordReset = async (req, res, next) => {
	try{
		Log.debug('user/requestPasswordReset');
		const email = req.body.email;
		const result = await (getAuthLogic().requestPasswordReset({email}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports.resetPassword = async (req, res, next) => {
	try{
		Log.debug('user/resetPassword');
		const code = req.query.code;
		await (getAuthLogic().resetPassword({code}));
		res.redirect('/resetPasswordSuccess');
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
		res.status(200).json({});
	}catch(e){
		next(e);
	}
};

exports._changePassword = exports.changePassword = async (req, res, next) => {
	try{
		Log.debug('user/(_)changePassword');
		const oldPass = req.body.oldPassword,
			newPass = req.body.newPassword;
		const result = await (getAuthLogic().changePassword({
			user: req.user,
			oldPass,
			newPass,
			ip: getIP(req)
		}));
		res.status(200).json(result);
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
		const result = await (getAuthLogic().token(params));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports.profile = async (req, res, next) => {
	Log.debug('user/profile');
	try{
		const result = await (getLogic().profile({
			user: req.user,
			ip: notNode.Auth.getIP(req),
		}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports.update = async (req, res, next) => {
	Log.debug('user.update');
	try{
		const targetUserId = req.params._id,
			activeUser = req.user;
		const result = await (getLogic().update({
			targetUserId,
			activeUser,
			data: req.body,
			user: req.user,
			ip: notNode.Auth.getIP(req),
		}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports.status = (req, res) => {
	Log.debug('user.status');
	res.status(200).json({});
};



/**
 *   Admin actions
 */

exports._create = async (req, res, next) => {
	try {
		Log.debug('user._create');
		const activeUser = req.user,
			ip = notNode.Auth.getIP(req);
		const data = {
			username: 	req.body.username,
			email: 			req.body.email,
			password: 	req.body.password,
			role: 			req.body.role,
			tel: 				req.body.tel,
			country: 		req.body.country,
			active: 		req.body.active,
			ip
		};
		const result = await (getLogic().createUser({
			activeUser,
			data,
			ip
		}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports._steal = (req, res) => {
	res.status(200).json({});
};

exports._update = async (req, res, next) => {
	try{
		Log.log('user/_update');
		const targetUserId = req.params._id,
			activeUser = req.user;
		const result = await (getLogic().update({
			targetUserId,
			activeUser,
			data: req.body,
			user: req.user,
			ip: 	notNode.Auth.getIP(req),
		}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports._delete = async (req, res, next) => {
	try{
		Log.log('user/_delete');
		const targetUserId = req.params._id,
			activeUser = req.user,
			activeUserId = req.user._id,
			ip =	notNode.Auth.getIP(req);
		const result = await (getLogic().delete({
			activeUser,
			activeUserId,
			targetUserId,
			ip
		}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports.get = async (req, res, next) => {
	try{
		Log.log('user/get');
		const targetUserId = req.params._id,
			activeUser = req.user,
			activeUserId = req.user._id,
			ip =	notNode.Auth.getIP(req);
		const result = await (getLogic().get({
			activeUser,
			activeUserId,
			targetUserId,
			ip
		}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

exports._get = async (req, res, next) => {
	try{
		Log.log('user/_get');
		const targetUserId = req.params._id,
			activeUser = req.user,
			activeUserId = req.user._id,
			ip =	notNode.Auth.getIP(req);
		const result = await (getLogic().get({
			activeUser,
			activeUserId,
			targetUserId,
			ip
		}));
		res.status(200).json(result);
	}catch(e){
		next(e);
	}
};

modMeta.extend(modMeta.Route, module.exports, AdminActions, MODEL_OPTIONS, '_');
modMeta.extend(modMeta.Route, module.exports, UserActions, MODEL_OPTIONS);
