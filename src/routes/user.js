const
	JWT = require('jsonwebtoken'),
	notError = require('not-error').notError,
	notLocale = require('not-locale'),
	notNode = require('not-node'),
	notAuth = require('not-node').Auth,
	validator = require('validator'),
	config = require('not-config').readerForModule('user');

exports.getIP = (req)=>{
	return req.headers['x-forwarded-for'] ||
	req.connection.remoteAddress ||
	req.socket.remoteAddress ||
	req.connection.socket.remoteAddress;
};

/**
*   Guest actions
*/
exports.register = (req, res)=>{
	const notApp = notNode.Application;
	notApp.logger.debug('register');
	let User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode'),
		ip = exports.getIP(req),
		newUser = new User({
			username: req.body.username,
			email:  req.body.email,
			password: req.body.password,
			ip
		});
	//validate input
	newUser.validate()
		//check if user with this attributes already exists
		.then(User.isUnique(newUser.username, newUser.email))
		//create user
		.then(()=> {
			return newUser.save();
		})
		//create one time code for email confirmation
		.then(()=>{
			return OneTimeCode.createCode(
				{
					email: newUser.email,
					owner: newUser._id,
					action: 'confirmEmail'
				},
				60 /* TTL == 60 minutes */
			);
		})
		//send email confirmation
		.then((oneTimeCode)=>{
			notApp.inform({
				to: newUser.email,
				tags: ['userEmailConfirmationLink'],
				link: `/api/user/confirmEmail?code=${oneTimeCode.code}&`
			});
		})
		.then(()=>{
			res.status(200).json({});
		})
		.catch((err)=>{
			notApp.report(err);
			return res.status(403).json({
				error: err.message
			});
		});
};

exports.confirmEmail = (req, res)=>{
	const notApp = notNode.Application;
	notApp.logger.debug('confirmEmail');
	let User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode'),
		code = req.query.code;
	try{
		OneTimeCode.findValid(code)
			.then((oneTimeCode)=>{
				if(oneTimeCode && oneTimeCode.payload.action === 'confirmEmail'){
					return oneTimeCode.redeem();
				}else{
					throw new notError(notLocale.say('one_time_code_not_valid'));
				}
			})
			.then((oneTimeCode)=>{
				return User.findById(oneTimeCode.payload.owner);
			})
			.then((user)=>{
				return user.confirmEmail();
			})
			.then(()=>{
				res.redirect('/user_email_confirmed');
			})
			.catch((e)=>{
				notApp.report(e);
				res.redirect('/login');
			});
	}catch(e){
		notApp.report(e);
		res.redirect('/login');
	}
};

exports.login = (req, res)=>{
	const notApp = notNode.Application;
	notApp.log('login');
	let User = this.getModel('User'),
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
				notAuth.setAuth(req, user._id, user.role);
				notApp.logger.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role}`);
				user.ip = ip;
				req.session.save();
				return user.save();
			})
			.then((user)=>{
				let ret = User.clearFromUnsafe(user).toObject();
				res.status(200).json({
					user:	ret
				});
				return;
			})
			.catch((err)=> {
				notApp.report(err);
				return res.status(403).json({
					error: err.message
				});
			});
	}
};

exports.requestLoginByEmail = (req, res)=>{
	const notApp = notNode.Application;
	notApp.logger.debug('request login by email');
	const User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode');
	let	email = req.body.email;
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
	const notApp = notNode.Application;
	notApp.logger.debug('login by email');
	let User = this.getModel('User'),
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
			notApp.logger.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role} via emailed one-time code`);
			user.ip = ip;
			req.session.save();
			user.save();
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
			error: notLocale.say('email_not_valid')
		});
	}
};

exports.restorePassword = (req, res)=>{
	const notApp = notNode.Application;
	notApp.logger.debug('restore password');
	let User = this.getModel('User'),
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
			const notApp = notNode.Application;
			notApp.logger.info(`'${user.username}' restored password as ${user._id} ${user.role} via emailed one-time code`);
			try{
				notApp.inform({
					to: user.email,
					tags: ['userPasswordNew'],
					pass: pass
				});
				res.redirect('/restorePasswordSuccess');
			}catch(e){
				notApp.report(e);
				res.status(500).redirect('/restorePasswordError');
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

exports.token = (req, res)=>{
	const notApp = notNode.Application;	
	const secret = config.get('secret');
	let tokenTTL = config.get('tokenTTL');
	if(!secret || typeof secret === 'undefined' || secret === null || secret === ''){
		notApp.report(new Error(notLocale.say('user_token_secret_not_valid')));
		res.status(500).json({});
	}else{
		if(tokenTTL === 0 || isNaN(tokenTTL)){
			notApp.logger.log(notLocale.say('user_token_ttl_not_set'));
			tokenTTL = 3600;
		}
		let userInfo = {
			username: req.user.username,
			email: req.user.email,
			emailConfirmed: req.user.emailConfirmed,
			created: req.user.created,
			role: req.user.role,
			active: req.user.active,
			country: req.user.country,
			exp: Date.now() / 1000 + tokenTTL
		};
		let tokenData = {
			token: JWT.sign(userInfo, secret)
		};
		res.status(200).json(tokenData);
	}
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
