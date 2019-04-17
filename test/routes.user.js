
const testPaths = require('./options.js'),
	expect = require('chai').expect,
	assert = require('chai').assert,
	notError = require('not-error'),
	path = require('path'),
	config = require('not-config').init(testPaths.config),
	log = require('not-log')(testPaths.log)(module),
	remember = require('./remember'),
	domain = require('not-node').notDomain,
	notNode = require('not-node'),
	Proto = require('not-node').Proto,
	notLocale = require('not-locale'),
	OneTimeCode = require('not-one-time-code/src/models/oneTimeCode'),
	routes = require('../src/routes/user.js'),
	User = require('../src/models/user.js'),
	mongoose = require('mongoose'),
	MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer,
	mongoServer = new MongoMemoryServer();
mongoose.Promise = Promise;

before((done) => {
	notLocale.fromDir(path.join(__dirname, '../src/locales'));
	notLocale.fromDir(require('not-one-time-code').paths.locales);
	mongoServer
		.getConnectionString()
		.then((mongoUri) => {
			return mongoose.connect(mongoUri, {}, (err) => {
				if (err) {
					done(err);
				}
			});
		})
		.then(()=>{
			if (typeof User.User == 'undefined'){
				Proto.fabricate(User, {}, mongoose);
			}
			if (typeof OneTimeCode.OneTimeCode == 'undefined'){
				Proto.fabricate(OneTimeCode, {}, mongoose);
			}
			done();
		})
		.catch((e)=>{
			done(e);
		});
});

after((done) => {
	mongoose.disconnect();
	mongoServer.stop();
	done();
});


describe('routes/user - in memory mongoDB', function () {
	before(function (done) {
		let userDocument = {
			email: 'test@mail.org',
			username: 'test_mail.org',
			password: 'test_mail.org',
			emailConfirmed: true,
			role: ['user'],
			active: true
		};
		new User.User(userDocument).save().then(()=>{
			done();
		}).catch((e)=>{done(e);});
	});

	it('login - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(result.user.username).to.deep.equal('test_mail.org');
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'test@mail.org',
					password: 	'test_mail.org',
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});

	it('login - empty email field', (done) => {
		let
			res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(this.status).to.be.equal(403);
					expect(result).to.deep.equal({
						error: notLocale.say('email_not_valid')
					});
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'',
					password: 	'',
				}
			};
			notNode.Application = {
				inform(){
				},
				report(e){
					expect(e.message).to.be.equal(notLocale.say('email_not_valid'));
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, ()=>{
			expect(false).to.be.ok;
			done();
		});
	});

	it('login - empty password field', (done) => {
		let
			res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(this.status).to.be.equal(403);
					expect(result).to.deep.equal({
						error: notLocale.say('password_length_not_valid')
					});
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'legacy@email.address',
					password: 	'',
				}
			};
		notNode.Application = {
			inform(){},
			report(e){
				expect(e.message).to.be.equal(notLocale.say('password_length_not_valid'));
			}
		};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, ()=>{
			expect(false).to.be.ok;
			done();
		});
	});

	it('login - wrong email field', (done) => {
		let
			res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(this.status).to.be.equal(403);
					expect(result).to.deep.equal({
						error: notLocale.say('user_not_found')
					});
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'legacy@email.address',
					password: 	'12356890',
				}
			};
			notNode.Application = {
				inform(){},
				report(e){
					expect(e.message).to.be.equal(notLocale.say('user_not_found'));
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, ()=>{
			expect(false).to.be.ok;
			done();
		});
	});

	it('login - ip address detection testing', () => {
		expect(routes.getIP({
			headers:{
				'x-forwarded-for': '127.0.0.1'
			}
		})).to.be.equal('127.0.0.1');
		expect(routes.getIP({
			headers:{},
			connection:{
				remoteAddress:'127.0.0.1'
			}
		})).to.be.equal('127.0.0.1');
		expect(routes.getIP({
			headers:{},
			connection:{},
			socket:{
				remoteAddress:'127.0.0.1'
			}
		})).to.be.equal('127.0.0.1');
		expect(routes.getIP({
			headers:{},
			connection:{
				socket:{
					remoteAddress: '127.0.0.1'
				}
			},
			socket:{}
		})).to.be.equal('127.0.0.1');
	});

	it('logout', (done) => {
		let res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(this.status).to.be.equal(200);
					expect(result).to.be.deep.equal({});
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'',
					password: 	'',
				}
			};
		routes.logout(req, res, ()=>{
			expect(false).to.be.ok;
			done();
		});
	});
});



describe('routes/user/register', function () {
	it('register - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org',
					password: 	'register_mail.org',
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.register(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/requestLoginByEmail', function () {
	it('requestLoginByEmail - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(result.message).to.be.equal(notLocale.say('requestLoginByLink_success'));
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email:'test@mail.org'
				}
			};
		notNode.Application = {
			inform(){},
			report(){},
			getModel(name){
				if(name === 'User'){
					return User.User;
				}else if(name === 'OneTimeCode'){
					return OneTimeCode.OneTimeCode;
				}
			}
		};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.requestLoginByEmail(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});

describe('routes/user/loginByEmail', function () {
	let oneTimePasses = [],
		oneTimeUser = null;
	before((done)=>{
		((new User.User({
			email: 'oneTimeTester@email.com',
			username: 'oneTimeTester',
			emailConfirmed: false,
			password: 'oneTimeTester'
		})).save())
			.then((user)=>{
				oneTimeUser = user;
				return Promise.all(
					[
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'loginByEmail'
						}),
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'loginByEmail'
						}),
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'loginByEmail'
						})
					]
				);
			})
			.then((codes)=>{
				oneTimePasses = codes;
				done();
			})
			.catch((e)=>{done(e);});
	});

	it('loginByEmail - ok', (done) => {
		let	res = {
				status(st){
					this._status = st;
					return this;
				},
				redirect(path){
					expect(this._status).to.be.equal(200);
					expect(path).to.be.equal('/');
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				query: {
					code: oneTimePasses[0].code
				}
			};
			notNode.Application = {
				inform(){},
				report(err){
					expect(err).to.be.not.ok;
				},
				getModel(name){
					if(name === 'User'){
						return User.User;
					}else if(name === 'OneTimeCode'){
						return OneTimeCode.OneTimeCode;
					}
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.loginByEmail(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});

	it('loginByEmail - failed, used password', (done) => {
		let	res = {
				status(st){
					this._status = st;
					return this;
				},
				redirect(path){
					expect(path).to.be.equal('/login');
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				query: {
					code: oneTimePasses[0].code
				}
			};
			notNode.Application = {
				inform(){},
				report(err){
					expect(err.message).to.be.equal(notLocale.say('one_time_code_not_valid'));
				},
				getModel(name){
					if(name === 'User'){
						return User.User;
					}else if(name === 'OneTimeCode'){
						return OneTimeCode.OneTimeCode;
					}
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.loginByEmail(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});

	it('loginByEmail - failed, empty password', (done) => {
		let	res = {
			status(st){
				this._status = st;
				return this;
			},
			redirect(path){
				expect(path).to.be.equal('/login');
				done();
			}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				query: {
					code: ''
				}
			};
			notNode.Application = {
				inform(){},
				report(err){
					expect(err.message).to.be.equal(notLocale.say('one_time_code_not_in_format'));
				},
				getModel(name){
					if(name === 'User'){
						return User.User;
					}else if(name === 'OneTimeCode'){
						return OneTimeCode.OneTimeCode;
					}
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.loginByEmail(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/requestPasswordRestore', function () {
	let oneTimePasses = [],
		oneTimeUser = null;
	before((done)=>{
		((new User.User({
			email: 'secondTimeTester@email.com',
			username: 'secondTimeTester',
			emailConfirmed: false,
			password: 'secondTimeTester'
		})).save())
			.then((user)=>{
				oneTimeUser = user;
				return Promise.all(
					[
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'restorePassword'
						}),
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'restorePassword'
						}),
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'restorePassword'
						})
					]
				);
			})
			.then((codes)=>{
				oneTimePasses = codes;
				done();
			})
			.catch((e)=>{done(e);});
	});
	it('requestPasswordRestore - ok', (done) => {
		let	res = {
			status(st){
				this._status = st;
				return this;
			},
			json(data){
				expect(this._status).to.be.equal(200);
				expect(data.message).to.be.equal(notLocale.say('requestRestorePasswordLink_success'));
				done();
			}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'secondTimeTester@email.com'
				}
			};
			notNode.Application = {
				inform(){},
				report(err){
					expect(err.message).to.be.equal(notLocale.say('one_time_code_not_in_format'));
				},
				getModel(name){
					if(name === 'User'){
						return User.User;
					}else if(name === 'OneTimeCode'){
						return OneTimeCode.OneTimeCode;
					}
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.requestPasswordRestore(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/restorePassword', function () {
	let oneTimePasses = [],
		oneTimeUser = null;
	before((done)=>{
		((new User.User({
			email: 'secondTimeTester@email.com',
			username: 'secondTimeTester',
			emailConfirmed: false,
			password: 'secondTimeTester'
		})).save())
			.then((user)=>{
				oneTimeUser = user;
				return Promise.all(
					[
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'restorePassword'
						}),
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'restorePassword'
						}),
						OneTimeCode.OneTimeCode.createCode({
							email: user.email,
							owner: user._id,
							action: 'restorePassword'
						})
					]
				);
			})
			.then((codes)=>{
				oneTimePasses = codes;
				done();
			})
			.catch((e)=>{done(e);});
	});
	it('restorePassword - ok', (done) => {
		let	res = {
			status(st){
				this._status = st;
				return this;
			},
			redirect(path){
				expect(path).to.be.equal('/restorePasswordSuccess');
				done();
			}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				query: {
					code: 		oneTimePasses[0].code
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.restorePassword(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/changePassword', function () {
	it('changePassword - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org'
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.changePassword(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/profile', function () {
	it('profile - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org'
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.profile(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});

describe('routes/user/update', function () {
	it('update - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org'
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.update(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});

describe('routes/user/status', function () {
	it('status - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org'
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.status(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/_steal', function () {
	it('_steal - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org'
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes._steal(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/_list', function () {
	it('_list - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org'
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes._list(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});


describe('routes/user/_update', function () {
	it('_update - ok', (done) => {
		let	res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(result.error).to.be.undefined;
					expect(this.status).to.be.equal(200);
					done();
				}
			},
			req = {
				headers:{
					'x-forwarded-for': '127.0.0.1'
				},
				session:{
					save(){}
				},
				body: {
					email: 		'register@mail.org'
				}
			};
		routes.getModel = ()=>{
			return User.User;
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes._update(req, res, (err)=>{
			if(err){
				done(err);
			}else{
				expect(false).to.be.ok;
				done();
			}
		});
	});
});
