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
	JWT = require('jsonwebtoken'),
	notError = require('not-error').notError,
	notLocale = require('not-locale'),
	notNode = require('not-node'),
	notAuth = require('not-node').Auth,
	validator = require('validator'),
	Log = require('not-log')(module, 'User/Routes'),
	config = require('not-config').readerForModule('user');

exports.getIP = (req) => {
	return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};

/**
 *   Guest actions
 */
exports.register = async (req, res) => {
	const notApp = notNode.Application;
	try {
		Log.debug('register');
		let User = this.getModel('User'),
			OneTimeCode = this.getModel('OneTimeCode'),
			ip = exports.getIP(req),
			userID = await notNode.Increment.next(MODEL_NAME),
			newUser = new User({
				userID,
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
				ip
			});
		//validate input
		newUser.validate()
		//check if user with this attributes already exists
			.then(() => {
				return User.isUnique(newUser.username, newUser.email);
			})
		//create user
			.then((unique) => {
				if (unique) {
					return User.add(newUser);
				} else {
					throw new notError(notLocale.say('user_uniqueness_verification_error'), {
						username: newUser.username,
						email: newUser.email
					});
				}
			})
		//create one time code for email confirmation
			.then(() => {
				return OneTimeCode.createCode({
					email: newUser.email,
					owner: newUser._id,
					action: 'confirmEmail'
				},
				60 /* TTL == 60 minutes */
				);
			})
		//send email confirmation
			.then((oneTimeCode) => {
				notApp.inform({
					to: newUser.email,
					tags: ['userEmailConfirmationLink'],
					link: `/api/user/confirmEmail?code=${oneTimeCode.code}&`
				});
			})
			.then(() => {
				res.status(200).json({});
			})
			.catch(async (err) => {
				Log.error(err);
				notApp.report(err);
				if (err.message && err.message.indexOf('E11000') > -1) {
					try {
						let existName = await User.usernameExists(newUser.username);
						let existEmail = await User.emailExists(newUser.email);
						if (existName || existEmail) {
							let mes = {
								status: 'error',
								errors: {}
							};
							if (existEmail) {
								mes.errors.email = [notLocale.say('email_taken')];
							}
							if (existName) {
								mes.errors.username = [notLocale.say('username_taken')];
							}
							return res.status(500).json(mes);
						} else {
							return res.status(500).json({
								error: notLocale.say('some_error')
							});
						}
					} catch (e) {
						if (e instanceof notError) {
							return res.status(500).json({
								error: notError.message
							});
						} else {
							return res.status(500).json({
								error: notLocale.say('some_error')
							});
						}
					}
				} else {
					return res.status(500).json({
						error: notLocale.say('some_error')
					});
				}
			});
	} catch (e) {
		Log.error(e);
		notApp.report(e);
		return res.status(500).json({
			error: notLocale.say('some_error')
		});
	}
};

exports.confirmEmail = (req, res) => {
	const notApp = notNode.Application;
	Log.debug('confirmEmail');
	let User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode'),
		code = req.query.code;
	try {
		OneTimeCode.findValid(code)
			.then((oneTimeCode) => {
				if (oneTimeCode && oneTimeCode.payload.action === 'confirmEmail') {
					return oneTimeCode.redeem();
				} else {
					throw new notError(notLocale.say('one_time_code_not_valid'));
				}
			})
			.then((oneTimeCode) => {
				return User.findById(oneTimeCode.payload.owner);
			})
			.then((user) => {
				return user.confirmEmail();
			})
			.then(() => {
				res.redirect('/user_email_confirmed');
			})
			.catch((e) => {
				notApp.report(e);
				res.redirect('/login');
			});
	} catch (e) {
		notApp.report(e);
		res.redirect('/login');
	}
};

exports.login = (req, res) => {
	const notApp = notNode.Application;
	notApp.log('login');
	let User = this.getModel('User'),
		email = req.body.email,
		password = req.body.password,
		ip = exports.getIP(req);
	if ((typeof email !== 'string') || (!validator.isEmail(email))) {
		let err = new notError(notLocale.say('email_not_valid'));
		notApp.report(err);
		return res.status(403).json({
			errors: {
				email: [err.message]
			}
		});
	} else if ((typeof password !== 'string') || (!validator.isLength(password, {
		min: 6,
		max: 100
	}))) {
		let err = new notError(notLocale.say('password_length_not_valid'));
		notApp.report(err);
		return res.status(403).json({
			errors: {
				password: [err.message]
			}
		});
	} else {
		User.authorize(email, password)
			.then((user) => {
				notAuth.setAuth(req, user._id, user.role);
				notApp.logger.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role}`);
				user.ip = ip;
				req.session.save();
				return user.save();
			})
			.then((user) => {
				let ret = User.clearFromUnsafe(user).toObject();
				res.status(200).json({
					user: ret
				});
				return;
			})
			.catch((err) => {
				notApp.report(err);
				return res.status(403).json({
					error: err.message
				});
			});
	}
};

exports.requestLoginCodeOnEmail = (req, res) => {
	const notApp = notNode.Application;
	notApp.logger.debug('request login by code from email');
	const User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode');
	let email = req.body.email;
	if (validator.isEmail(email)) {
		User.getByEmail(email)
			.then((user) => {
				if (user) {
					return OneTimeCode.createCode({
						email: user.email,
						owner: user._id,
						action: 'loginByCode'
					});
				} else {
					res.status(403).json({
						errors: {
							email: [notLocale.say('user_not_found')]
						}
					});
				}
			})
			.then((oneTimeCode) => {
				try {
					notApp.inform({
						to: email,
						tags: ['userOneTimeLoginLink'],
						link: `/api/user/loginByCode?code=${oneTimeCode.code}&`
					});
					res.status(200).json({
						message: notLocale.say('requestLoginByLink_success')
					});
				} catch (e) {
					notApp.report(e);
					res.status(500).json({
						error: e.message
					});
				}
			})
			.catch((e) => {
				notApp.report(e);
				res.status(500).json({
					error: e.message
				});
			});
	} else {
		res.status(403).json({
			errors: {
				email: [notLocale.say('email_not_valid')]
			}
		});
	}
};

exports.loginByCode = (req, res) => {
	const notApp = notNode.Application;
	notApp.logger.debug('login by code from email or sms');
	let User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode'),
		code = req.query.code,
		ip = exports.getIP(req);
	OneTimeCode.findValid(code)
		.then((oneTimeCode) => {
			if (oneTimeCode && oneTimeCode.payload.action === 'loginByCode') {
				return oneTimeCode.redeem();
			} else {
				throw new notError(notLocale.say('one_time_code_not_valid'));
			}
		})
		.then((oneTimeCode) => {
			return User.findById(oneTimeCode.payload.owner);
		})
		.then((user) => {
			notAuth.setAuth(req, user._id, user.role);
			notApp.logger.info(`'${user.username}' authorized as ${req.session.user} ${req.session.role} via emailed/smsed one-time code`);
			user.ip = ip;
			req.session.save();
			user.save();
			res.status(200).redirect('/');
		})
		.catch((e) => {
			notApp.report(e);
			res.redirect('/login');
		});
};

exports.requestPasswordRestore = (req, res) => {
	let User = this.getModel('User'),
		email = req.body.email,
		notApp = notNode.Application,
		OneTimeCode = notApp.getModel('OneTimeCode');
	if (validator.isEmail(email)) {
		User.getByEmail(email)
			.then((user) => {
				return OneTimeCode.createCode({
					email: user.email,
					owner: user._id,
					action: 'restorePassword'
				});
			})
			.then((oneTimeCode) => {
				try {
					notApp.inform({
						to: email,
						tags: ['userPasswordRestoration'],
						link: `/api/user/restorePassword?code=${oneTimeCode.code}`
					});
					res.status(200).json({
						message: notLocale.say('requestRestorePasswordLink_success')
					});
				} catch (e) {
					notApp.report(e);
					res.status(500).json({
						error: e.message
					});
				}
			})
			.catch((e) => {
				notApp.report(e);
				res.status(500).json({
					error: e.message
				});
			});
	} else {
		res.status(403).json({
			errors: {
				email: [notLocale.say('email_not_valid')]
			}
		});
	}
};

exports.restorePassword = (req, res) => {
	const notApp = notNode.Application;
	Log.debug('restore password');
	let User = this.getModel('User'),
		OneTimeCode = notApp.getModel('OneTimeCode'),
		code = req.query.code;
	OneTimeCode.findValid(code)
		.then((oneTimeCode) => {
			if (oneTimeCode.payload.action === 'restorePassword') {
				return oneTimeCode.redeem();
			} else {
				throw new notError(notLocale.say('one_time_code_not_valid'));
			}
		})
		.then((oneTimeCode) => {
			return User.findById(oneTimeCode.payload.owner);
		})
		.then((user) => {
			let pass = user.createNewPassword();
			const notApp = notNode.Application;
			notApp.logger.info(`'${user.username}' restored password as ${user._id} ${user.role} via emailed one-time code`);
			try {
				notApp.inform({
					to: user.email,
					tags: ['userPasswordNew'],
					pass: pass
				});
				res.redirect('/restorePasswordSuccess');
			} catch (e) {
				notApp.report(e);
				res.status(500).redirect('/restorePasswordError');
			}
		})
		.catch((e) => {
			notApp.report(e);
			res.redirect('/login');
		});
};

/**
 *   Authorized user actions
 */
exports.logout = (req, res) => {
	req.session.user = null;
	req.session.role = 'guest';
	res.status(200).json({});
};

exports.changePassword = (req, res) => {
	res.status(200).json({});
};

exports.profile = (req, res) => {
	Log.debug('user/profile');
	let targetId = req.user._id,
		userId = req.user._id;
	try {
		const notApp = notNode.Application;
		let
			thisModel = notApp.getModel(MODEL_NAME);
		thisModel.getOne(targetId).then((data) => {
			res.status(200).json({
				status: 'ok',
				result: thisModel.clearFromUnsafe(data, req.user.role)
			});
		})
			.catch((e) => {
				notNode.Application.report(new notError('user.profile:db', {
					ip: exports.getIP(req),
					userId,
					targetId
				}, e));
				res.status(500).json({
					status: 'error',
					error: e.toString()
				});
			});
	} catch (e) {
		notNode.Application.report(new notError('user.profile', {
			ip: exports.getIP(req),
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error',
			error: e.toString()
		});
	}
};

exports.update = async (req, res) => {
	const notApp = notNode.Application;
	let targetId = req.params._id,
		userId = req.user._id;
	try {
		let rolesPriority = config.get('roles:priority') || ['root', 'admin', 'client', 'user', 'guest'];
		let thisModel = notApp.getModel(MODEL_NAME);
		let user = await thisModel.findOne({
			_id: targetId,
			__latest: true,
			__closed: false
		}).exec();

		if (!user) {
			return res.status(200).json({
				status: 'error',
				error: notLocale.say('user_not_found')
			});
		}
		//если не владелец
		if (targetId !== userId) {
			//и не админ, а цель ниже по уровню
			if (!(notNode.Auth.compareRoles(req.user.role, ['admin']) && notNode.Auth.checkSupremacy(req.user.role, user.role, rolesPriority))) {
				//репортим попытку доступа к запрещенным данным
				notNode.Application.report(
					new notError('user.update: insufficient_level_of_privilegies', {
						ip: exports.getIP(req),
						userId,
						targetId
					})
				);
				//return error
				return res.status(405).json({
					status: 'error',
					error: notLocale.say('insufficient_level_of_privilegies')
				});
			}
		}
		//rights is ok
		await thisModel.Update(req.body, req.user.role, userId);
		//if no errors
		return res.status(200).json({
			status: 'ok'
		});
	} catch (e) {
		notNode.Application.report(new notError('user.update', {
			ip: exports.getIP(req),
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error',
			error: e.toString()
		});
	}
};

exports.status = (req, res) => {
	res.status(200).json({});
};

exports.token = (req, res) => {
	const notApp = notNode.Application;
	const secret = config.get('secret');
	let tokenTTL = config.get('tokenTTL');
	if (!secret || typeof secret === 'undefined' || secret === null || secret === '') {
		notApp.report(new Error(notLocale.say('user_token_secret_not_valid')));
		res.status(500).json({});
	} else {
		if (tokenTTL === 0 || isNaN(tokenTTL)) {
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

exports._create = async (req, res) => {
	const notApp = notNode.Application;
	let targetId = req.params._id,
		userId = req.user._id;
	try {
		notApp.logger.debug('user._create');
		let User = this.getModel('User'),
			OneTimeCode = notApp.getModel('OneTimeCode'),
			ip = exports.getIP(req),
			userID = await notNode.Increment.next(MODEL_NAME),
			newUser = new User({
				userID,
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
				role: req.body.role,
				tel: req.body.tel,
				country: req.body.country,
				active: req.body.active,
				ip
			});

		newUser.validate()
		//check if user with this attributes already exists
			.then(() => {
				return User.isUnique(newUser.username, newUser.email);
			})
		//create user
			.then((unique) => {
				if (unique) {
					return User.add(newUser);
				} else {
					throw new notError('E11000');
				}
			})
		//create one time code for email confirmation
			.then((savedUser) => {
				notApp.logger.log({
					module: 'user',
					model: 'user',
					action: 'create',
					by: userId,
					target: savedUser._id,
					targetID: savedUser.userID
				});
				return OneTimeCode.createCode({
					email: newUser.email,
					owner: newUser._id,
					action: 'confirmEmail'
				},
				60 /* TTL == 60 minutes */
				);
			})
		//send email confirmation
			.then((oneTimeCode) => {
				notApp.inform({
					to: 	newUser.email,
					tags: ['userEmailConfirmationLink'],
					link: `/api/user/confirmEmail?code=${oneTimeCode.code}&`
				});
			})
			.then(() => {
				res.status(200).json({
					status: 'ok',
					result: User.clearFromUnsafe(newUser)
				});
			})
			.catch(async (err) => {
				notApp.report(err);
				if (err.message && err.message.indexOf('E11000') > -1) {
					try {
						let existName = await User.usernameExists(newUser.username);
						let existEmail = await User.emailExists(newUser.email);
						if (existName || existEmail) {
							let mes = {
								status: 'error',
								errors: {}
							};
							if (existEmail) {
								mes.errors.email = [notLocale.say('email_taken')];
							}
							if (existName) {
								mes.errors.username = [notLocale.say('username_taken')];
							}
							return res.status(500).json(mes);
						} else {
							return res.status(500).json({
								error: notLocale.say('some_error')
							});
						}
					} catch (e) {
						if (e instanceof notError) {
							return res.status(500).json({
								error: notError.message
							});
						} else {
							return res.status(500).json({
								error: notLocale.say('some_error')
							});
						}
					}
				} else {
					return res.status(500).json({
						error: notLocale.say('some_error')
					});
				}
			});
	} catch (e) {
		notNode.Application.report(new notError('user._get', {
			ip: exports.getIP(req),
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error',
			error: e.toString()
		});
	}
};

exports._steal = (req, res) => {
	res.status(200).json({});
};

exports._update = async (req, res) => {
	let targetId = req.params._id,
		userId = req.user._id;
	try {
		const notApp = notNode.Application;
		let thisModel = notApp.getModel(MODEL_NAME);

		let user = await thisModel.findOne({
			_id: targetId,
			__latest: true,
			__closed: false
		}).exec();

		if (!user) {
			return res.status(200).json({
				status: 'error',
				error: notLocale.say('user_not_found')
			});
		}
		await thisModel.Update(req.body, req.user.role, userId);
		return res.status(200).json({
			status: 'ok'
		});
	} catch (e) {
		notNode.Application.report(new notError('user._update', {
			ip: exports.getIP(req),
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error',
			error: e.toString()
		});
	}
};

exports._delete = async (req, res) => {
	let targetId = req.params._id,
		userId = req.user._id;
	try {
		const notApp = notNode.Application;
		let thisModel = notApp.getModel(MODEL_NAME);

		if (targetId === userId) {
			return res.status(403).json({
				status: 'error',
				error: notLocale.say('user_cant_delete_his_own_account')
			});
		}

		let user = await thisModel.findOne({
			_id: targetId,
			__latest: true,
			__closed: false
		}).exec();

		if (!user) {
			return res.status(200).json({
				status: 'ok'
			});
		}
		//только админам и супер пользователю положено
		if (notNode.Auth.intersect_safe(req.user.role, ['root', 'admin']).length === 0) {
			notNode.Application.report(
				new notError('user._delete: insufficient_level_of_privilegies', {
					ip: exports.getIP(req),
					userId,
					targetId
				})
			);
			return res.status(405).json({
				status: 'error',
				error: notLocale.say('insufficient_level_of_privilegies')
			});
		}
		//только если есть превосходство над удаляемым
		let rolesPriority = config.get('roles:priority') || ['root', 'admin', 'client', 'user', 'guest'];
		if (notNode.Auth.checkSupremacy(req.user.role, user.role, rolesPriority)) {
			notApp.logger.log({
				module: 'user',
				model: 'user',
				action: 'delete',
				by: userId,
				target: targetId
			});
			await user.updateOne({
				__closed: true
			}).exec();
			return res.status(200).json({
				status: 'ok'
			});
		} else {
			notNode.Application.report(
				new notError('user._delete: insufficient_level_of_privilegies', {
					ip: exports.getIP(req),
					userId,
					targetId
				})
			);
			return res.status(405).json({
				status: 'error',
				error: notLocale.say('insufficient_level_of_privilegies')
			});
		}
	} catch (e) {
		notNode.Application.report(new notError('user._delete', {
			ip: exports.getIP(req),
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error',
			error: e.toString()
		});
	}
};

exports.get = (req, res) => {
	let targetId = req.params._id,
		userId = req.user._id;
	try {
		const notApp = notNode.Application;
		let
			rolesPriority = config.get('roles:priority') || ['root', 'admin', 'client', 'user', 'guest'],
			thisModel = notApp.getModel(MODEL_NAME);
		thisModel.getOne(targetId).then((data) => {
			data = thisModel.clearFromUnsafe(data);
			//если собственные данные
			if (targetId === userId) {
				res.status(200).json({
					status: 'ok',
					result: data
				});
			} else { //если не его данные, то
				//но он админ и выше по уровню доступа чем цель
				if (
					notNode.Auth.compareRoles(req.user.role, ['admin']) &&
            notNode.Auth.checkSupremacy(req.user.role, data.role, rolesPriority)
				) {
					res.status(200).json({
						status: 'ok',
						result: data
					});
				} else { //если правов не имеет
					//пише в лог с подробностями: кто кого хотел посмотреть
					notNode.Application.report(
						new notError('user.get: insufficient_level_of_privilegies', {
							ip: exports.getIP(req),
							userId,
							targetId
						})
					);
					//результат на лицо
					res.status(405).json({
						status: 'error',
						error: notLocale.say('insufficient_level_of_privilegies')
					});
				}
			}
		})
			.catch((e) => {
				notNode.Application.report(new notError('user.get(db)', {
					userId,
					targetId
				}, e));
				res.status(500).json({
					status: 'error'
				});
			});
	} catch (e) {
		notNode.Application.report(new notError('user.get', {
			ip: exports.getIP(req),
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error'
		});
	}

};

exports._get = async (req, res) => {
	Log.log('root user/get');
	let targetId = req.params._id,
		userId = req.user._id;
	try {
		const notApp = notNode.Application;
		let
			thisModel = notApp.getModel(MODEL_NAME);
		thisModel.getOne(targetId).then((data) => {
			res.status(200).json({
				status: 'ok',
				result: data
			});
		})
			.catch((e) => {
				notNode.Application.report(new notError('user._get(db)', {
					ip: exports.getIP(req),
					userId,
					targetId
				}, e));
				res.status(500).json({
					status: 'error',
					error: e.toString()
				});
			});
	} catch (e) {
		notNode.Application.report(new notError('user._get', {
			ip: exports.getIP(req),
			userId,
			targetId
		}, e));
		res.status(500).json({
			status: 'error',
			error: e.toString()
		});
	}
};

modMeta.extend(modMeta.Route, module.exports, AdminActions, MODEL_OPTIONS, '_');
modMeta.extend(modMeta.Route, module.exports, UserActions, MODEL_OPTIONS);
