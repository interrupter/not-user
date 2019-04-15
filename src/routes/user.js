const log = require('not-log')(module),
	query = require('not-filter'),
	notError = require('not-error'),
	notLocale = require('not-locale'),
	notNode = require('not-node'),
	notAuth = require('not-node').Auth,
	validator = require('validator'),
	uuidv4  =  require('uuidv4');

/**
*   Guest actions
*/
exports.register = (req, res)=>{
	//validate input
	//check if user with this attributes already exists
	//create user
	//send email confirmation
	res.status(200).json({});
};

exports.login = (req, res, next)=>{
	log.debug('login');
	let User = this.getModel('User'),
		UserSchema = this.getModelSchema('User'),
		email = req.body.email,
		password = req.body.password,
		ip = req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;
	User.authorize(email, password)
		.then((user)=>{
			if(user && user._id){
				notAuth.setAuth(req, user._id, user.role);
				log.info(`user authorized as ${req.session.user} ${req.session.role}`);
				user.ip = ip;
				req.session.save();
				query.return.process(req, UserSchema, user);
				return res.status(200).json({user});
			}else{
				let err = new notError(notLocale.say('user_not_found'));
				return res.status(403).json({
					error: err.message
				});
			}
		})
		.catch((err)=> {
			if (err instanceof notError) {
				return res.status(403).json({
					error: err.message
				});
			} else {
				return next(err);
			}
		});
};

exports.requestLoginByEmail = ()=>{
	log.debug('request login by email');
};

exports.loginByEmail = (req, res, next)=>{
	log.debug('login by email');
	let User = this.getModel('User'),
		UserSchema = this.getModelSchema('User'),
		email = req.body.email,
		ip = req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;
	if(validator.isEmail(email)){
		User.getByEmail(email)
			.then(()=>{

			})
			.catch();
	}
	User.createOneTimePassword()
		.then((user)=>{
			if(user && user._id){
				notAuth.setAuth(req, user._id, user.role);
				log.info(`user authorized as ${req.session.user} ${req.session.role}`);
				user.ip = ip;
				req.session.save();
				query.return.process(req, UserSchema, user);
				return res.status(200).json({user});
			}else{
				let err = new notError(notLocale.say('user_not_found'));
				return res.status(403).json({
					error: err.message
				});
			}
		})
		.catch((err)=> {
			if (err instanceof notError) {
				return res.status(403).json({
					error: err.message
				});
			} else {
				return next(err);
			}
		});
};

exports.requestPasswordRestore = (req, res, next)=>{
	let User = this.getModel('User'),
		notApp = notNode.Application;
	if(validator.isEmail(req.body.email)){
		User.getByEmail(req.body.email)
			.then(async (user) => {
				if(user){
					user.restore = uuidv4();
					try{
						await user.save();
						return user;
					}catch(e){
						throw new notError(notLocale.say('db_error'), { status: 500 });
					}
				}else{
					throw new notError(notLocale.say('user_not_found'));
				}
			})
			.then((user)=>{
				try{
					notApp.inform({
						tags: ["userPasswordRestoration"],
						to: user.email,
						link: notApp.getEnv('hostname') + '/api/user/restorePassword?code='+user.restore
					});
					return ;
				}catch(e){
					throw new notError(notLocale.say('mail_error'));
				}
			})
			.then(()=>{
				res.status(200).json({});
			})
			.catch((err)=> {
				if (err instanceof notError) {
					if (err.options.status){
						res.status(err.options.status);
					}else{
						res.status(403);
					}
					return res.json({
						error: err.message
					});
				} else {
					return next(err);
				}
			});
	}else{
		res.status(403).json({
			error: notLocale.say('user_not_found')
		});
	}
};


exports.restorePassword = (req, res)=>{
	res.status(200).json({});
};

/**
*   Authorized user actions
*/
exports.logout = (req, res)=>{
	req.session.user = null;
	req.session.role = 'guest';
	res.status(200).json({});
};

exports.changePassword = (req, res)=>{
	res.status(200).json({});
};

exports.profile = (req, res)=>{
	res.status(200).json({});
};

exports.update = (req, res)=>{
	res.status(200).json({});
};

exports.status = (req, res)=>{
	res.status(200).json({});
};

/**
*   Admin actions
*/
exports._steal = (req, res)=>{
	res.status(200).json({});
};

exports._list = (req, res)=>{
	res.status(200).json({});
};

exports._update = (req, res)=>{
	res.status(200).json({});
};
