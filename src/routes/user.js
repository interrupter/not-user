const log = require('not-log')(module),
	query = require('not-filter'),
	notError = require('not-error'),
	notLocale = require('not-locale'),
	notNode = require('not-node'),
	notAuth = require('not-node').Auth,
	validator = require('validator');

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

exports.getIP = (req)=>{
	return req.headers['x-forwarded-for'] ||
	req.connection.remoteAddress ||
	req.socket.remoteAddress ||
	req.connection.socket.remoteAddress;
};

exports.login = (req, res, next)=>{
	log.debug('login');
	let User = this.getModel('User'),
		UserSchema = this.getModelSchema('User'),
		notApp = notNode.Application,
		email = req.body.email,
		password = req.body.password,
		ip = exports.getIP(req);
	if((typeof email !=='string') || (!validator.isEmail(email))){
		let err = new notError(notLocale.say('email_not_valid'));
		notApp.report(err);
		return res.status(403).json({
			error: err.message
		});
	}else if((typeof password !=='string') || (!validator.isLength(password,{min: 6, max:100}))){
		let err = new notError(notLocale.say('password_length_not_valid'));
		notApp.report(err);
		return res.status(403).json({
			error: err.message
		});
	}else{
		User.authorize(email, password)
			.then((user)=>{
				if(user && user._id){
					notAuth.setAuth(req, user._id, user.role);
					log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role}`);
					user.ip = ip;
					req.session.save();
					user.save();
					query.return.process(req, UserSchema, user);
					return res.status(200).json({user});
				}else{
					let err = new notError(notLocale.say('user_not_found'));
					notApp.report(err);
					return res.status(403).json({
						error: err.message
					});
				}
			})
			.catch((err)=> {
				notApp.report(err);
				if (err instanceof notError) {
					return res.status(403).json({
						error: err.message
					});
				} else {
					return next(err);
				}
			});
	}
};

exports.requestLoginByEmail = (req, res)=>{
	log.debug('request login by email');
	let User = this.getModel('User'),
		notApp = notNode.Application,
		OneTimeCode = notApp.getModel('OneTimeCode'),
		email = req.body.email;
	if(validator.isEmail(email)){
		User.getByEmail(email)
			.then((user)=>{
				return OneTimeCode.createCode({
					email: user.email,
					owner: user._id,
					action: 'loginByEmail'
				});
			})
			.then((oneTimeCode)=>{
				try{
					notApp.inform({
						to: email,
						tags: ['userOneTimeLoginLink'],
						link: `/api/user/loginByEmail?code=${oneTimeCode.code}&`
					});
					res.status(200).json({
						message: notLocale.say('requestLoginByLink_success')
					});
				}catch(e){
					notApp.report(e);
					res.status(500).json({
						error: e.message
					});
				}
			})
			.catch((e)=>{
				notApp.report(e);
				res.status(500).json({
					error: e.message
				});
			});
	}else{
		res.status(403).json({
			error: notLocale.say('email_not_valid')
		});
	}
};

exports.loginByEmail = (req, res)=>{
	log.debug('login by email');
	let User = this.getModel('User'),
		UserSchema = this.getModelSchema('User'),
		notApp = notNode.Application,
		OneTimeCode = notApp.getModel('OneTimeCode'),
		code = req.query.code,
		ip = exports.getIP(req);
	OneTimeCode.findValid(code)
		.then((oneTimeCode)=>{
			if(oneTimeCode && oneTimeCode.payload.action === 'loginByEmail'){
				return oneTimeCode.redeem();
			}else{
				throw new notError(notLocale.say('one_time_code_not_valid'));
			}
		})
		.then((oneTimeCode)=>{
			return User.findById(oneTimeCode.payload.owner);
		})
		.then((user)=>{
			notAuth.setAuth(req, user._id, user.role);
			log.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role} via emailed one-time code`);
			user.ip = ip;
			req.session.save();
			user.save();
			query.return.process(req, UserSchema, user);
			res.status(200).redirect('/');
		})
		.catch((e)=>{
			notApp.report(e);
			res.redirect('/login');
		});
};

exports.requestPasswordRestore = (req, res)=>{
	let User = this.getModel('User'),
		email = req.body.email,
		notApp = notNode.Application,
		OneTimeCode = notApp.getModel('OneTimeCode');
	if(validator.isEmail(email)){
		User.getByEmail(email)
			.then((user)=>{
				return OneTimeCode.createCode({
					email: user.email,
					owner: user._id,
					action: 'restorePassword'
				});
			})
			.then((oneTimeCode)=>{
				try{
					notApp.inform({
						to: email,
						tags: ['userPasswordRestoration'],
						link: `/api/user/restorePassword?code=${oneTimeCode.code}`
					});
					res.status(200).json({
						message: notLocale.say('requestRestorePasswordLink_success')
					});
				}catch(e){
					notApp.report(e);
					res.status(500).json({
						error: e.message
					});
				}
			})
			.catch((e)=>{
				notApp.report(e);
				res.status(500).json({
					error: e.message
				});
			});
	}else{
		res.status(403).json({
			error: notLocale.say('user_not_found')
		});
	}
};

exports.restorePassword = (req, res)=>{
	log.debug('restore password');
	let User = this.getModel('User'),
		notApp = notNode.Application,
		OneTimeCode = notApp.getModel('OneTimeCode'),
		code = req.query.code;
	OneTimeCode.findValid(code)
		.then((oneTimeCode)=>{
			if(oneTimeCode.payload.action === 'restorePassword'){
				return oneTimeCode.redeem();
			}else{
				throw new notError(notLocale.say('one_time_code_not_valid'));
			}
		})
		.then((oneTimeCode)=>{
			return User.findById(oneTimeCode.payload.owner);
		})
		.then((user)=>{
			let pass = user.createNewPassword();
			try{
				notApp.inform({
					to: user.email,
					tags: ['userPasswordNew'],
					pass: pass
				});
				res.redirect('/restorePasswordSuccess');
			}catch(e){
				notApp.report(e);
				res.status(500).json({
					error: e.message
				});
			}
		})
		.catch((e)=>{
			notApp.report(e);
			res.redirect('/login');
		});
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
