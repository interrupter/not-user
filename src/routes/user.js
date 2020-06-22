const
	UserActions = [],
	AdminActions = [
		'listAndCount'
	],
	MODEL_NAME = 'User',
	MODEL_OPTIONS = {
		MODEL_NAME,
		MODEL_TITLE: 	'Пользователь',
		populate: {
			listAndCount: ['key']
		}
	},
	modMeta = require('not-meta');

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
		.catch(async(err)=>{
			notApp.report(err);
			if(err.message && err.message.indexOf('E11000') > -1){
				try{
					let existName = await User.usernameExists(newUser.username);
					let existEmail = await User.emailExists(newUser.email);
					if(existName || existEmail){
						let mes = {
							status: 'error',
							errors: {}
						};
						if(existEmail){
							mes.errors.email = [notLocale.say('email_taken')];
						}
						if(existName){
							mes.errors.username = [notLocale.say('username_taken')];
						}
						return res.status(500).json(mes);
					}else{
						return res.status(500).json({
							error: notLocale.say('some_error')
						});
					}
				}catch(e){
					if(e instanceof notError){
						return res.status(500).json({
							error: notError.message
						});
					}else{
						return res.status(500).json({
							error: notLocale.say('some_error')
						});
					}
				}
			}else{
				return res.status(500).json({
					error: notLocale.say('some_error')
				});
			}
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
			errors: {
				email: [err.message]
			}
		});
	}else if((typeof password !=='string') || (! validator.isLength(password, {min: 6, max: 100}))){
		let err = new notError(notLocale.say('password_length_not_valid'));
		notApp.report(err);
		return res.status(403).json({
			errors: {
				password: [err.message]
			}
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

exports.requestLoginCodeOnEmail = (req, res)=>{
	const notApp = notNode.Application;
	notApp.logger.debug('request login by code from email');
	const User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode');
	let	email = req.body.email;
	if(validator.isEmail(email)){
		User.getByEmail(email)
			.then((user)=>{
				if(user){
					return OneTimeCode.createCode({
						email: user.email,
						owner: user._id,
						action: 'loginByCode'
					});
				}else{
					res.status(403).json({
						errors: {
							email: [notLocale.say('user_not_found')]
						}
					});
				}
			})
			.then((oneTimeCode)=>{
				try{
					notApp.inform({
						to: email,
						tags: ['userOneTimeLoginLink'],
						link: `/api/user/loginByCode?code=${oneTimeCode.code}&`
					});
					res.status(200).json({
						message: notLocale.say('requestLoginByLink_success')
					});
				}catch(e){
					notApp.report(e);
					res.status(500).json({
						error:  e.message
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
			errors: {
				email: [notLocale.say('email_not_valid')]
			}
		});
	}
};

exports.loginByCode = (req, res)=>{
	const notApp = notNode.Application;
	notApp.logger.debug('login by code from email or sms');
	let User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode'),
		code = req.query.code,
		ip = exports.getIP(req);
	OneTimeCode.findValid(code)
		.then((oneTimeCode)=>{
			if(oneTimeCode && oneTimeCode.payload.action === 'loginByCode'){
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
			notApp.logger.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role} via emailed/smsed one-time code`);
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
			errors: {
				email: [notLocale.say('email_not_valid')]
			}
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
			telephone: req.user.telephone,
			telephoneConfirmed: req.user.telephoneConfirmed,
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

exports._delete = async (req, res)=>{
	try{
		const notApp = notNode.Application;
		let id = req.params._id,
			thisModel = notApp.getModel(MODEL_NAME);

		let user = await thisModel.findOne({
					_id: id,
					__latest: true,
					__closed: false
				}).exec();

		if(user._id === req.user._id ){
			return res.status(403).json({ status: 'error', error: notLocale.say('user_cant_delete_his_own_account')});
		}
		//только админам и супер пользователю положено
		if(notNode.Auth.intersect_safe(user.role, ['root', 'admin']).length === 0){
			return res.status(405).json({
				 status: 	'error',
				 error: 	notLocale.say('insufficient_level_of_privilegies')
			});
		}
		//только если есть превосходство над удаляемым
		let rolesPriority = config.get('roles:priority') || ['root', 'admin', 'client', 'user', 'guest'];
		if(notNode.Auth.checkSupremacy(req.user.role, user.role, rolesPriority)){
			notApp.logger.log({
				module: 'user',
				model: 	'user',
				action: 'delete',
				by: 		req.user._id,
				target: user._id
			});
			await user.updateOne({
				__closed: true
			}).exec();
			return res.status(200).json({
				status: 'ok'
			});
		}else{
			return res.status(405).json({
				 status: 	'error',
				 error: 	notLocale.say('insufficient_level_of_privilegies')
			});
		}
	}catch(e){
		return res.status(500).json({
			status: 'error'
		});
	}
};

exports.get = (req, res)=>{
	try{
		const notApp = notNode.Application;
		let targetId = req.params._id,
				userId = req.user._id,
				rolesPriority = config.get('roles:priority') || ['root', 'admin', 'client', 'user', 'guest'],
				thisModel = notApp.getModel(MODEL_NAME);
		thisModel.getOne(targetId).then((data)=>{
			data = thisModel.clearFromUnsafe(data);
			//если собственные данные
			if(targetId === userId){
				res.status(200).json({
					status: 'ok',
					result: data
				});
			}else{//если не его данные, то
				//но он админ и выше по уровню доступа чем цель
				if(
					notNode.Auth.compareRoles(req.user.role, ['admin']) &&
					notNode.Auth.checkSupremacy(req.user.role, data.role, rolesPriority)
				){
					res.status(200).json({
						status: 'ok',
						result: data
					});
				}else{//если правов не имеет
					//пише в лог с подробностями: кто кого хотел посмотреть
					notNode.Application.report(
						new notError('user.get: insufficient_level_of_privilegies', {
								userId,
								targetId
							}
						)
					);
					//результат на лицо
					res.status(405).json({
						status: 'error',
	 				 	error: 	notLocale.say('insufficient_level_of_privilegies')
					});
				}
			}
		})
		.catch((e)=>{
			notNode.Application.report(new notError('user.get(db)', {	userId,
				targetId}, e));
			res.status(500).json({ status: 'error' });
		});
	}catch(e){
		notNode.Application.report(new notError('user.get', {	userId,
			targetId}, e));
		res.status(500).json({ status: 'error' });
	}

};

exports._get = async (req, res)=>{
	console.log('root user/get');
	try{
		const notApp = notNode.Application;
		let targetId = req.params._id,
				userId = req.user._id,
			thisModel = notApp.getModel(MODEL_NAME);
		thisModel.getOne(targetId).then((data)=>{
			res.status(200).json({
				status: 'ok',
				result: data
			});
		})
		.catch((e)=>{
			notNode.Application.report(new notError('user._get(db)', {
				userId,
				targetId
			}, e));
			res.status(500).json({
				status: 'error',
				error: 	e.toString()
			});
		});
	}catch(e){
		notNode.Application.report(new notError('user._get', {
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error',
			error: 	e.toString()
		});
	}
};

modMeta.extend(modMeta.Route, module.exports, AdminActions, MODEL_OPTIONS, '_');
modMeta.extend(modMeta.Route, module.exports, UserActions, MODEL_OPTIONS);
