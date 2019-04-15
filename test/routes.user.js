
const testPaths = require('./options.js'),
	expect = require('chai').expect,
	assert = require('chai').assert,
	notError = require('not-error'),
	path = require('path'),
	config = require('not-config').init(testPaths.config),
	log = require('not-log')(testPaths.log)(module),
	remember = require('./remember'),
	domain = require('not-node').notDomain,
	Proto = require('not-node').Proto,
	notLocale = require('not-locale'),
	routes = require('../src/routes/user.js'),
	User = require('../src/models/user.js'),
	mongoose = require('mongoose'),
	MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer,
	mongoServer = new MongoMemoryServer();
mongoose.Promise = Promise;

before((done) => {
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
			Proto.fabricate( User, {}, mongoose);
			console.log(User.User);
			done();
		})
		.catch((e)=>{
			done(e);
		});
});

after(() => {
	mongoose.disconnect();
	mongoServer.stop();
});


describe('routes/user - in memory mongoDB', function () {
	before(function (done) {
		notLocale.fromDir(path.join(__dirname, '../src/locales'));
		done();
	});

	/*	it('login - ok', (done) => {
		let userDocument = {
				_id: '123123123',
				email: 'test@mail.org',
				emailConfirmed: true,
				role: ['user'],
				active: true
			},
			res = {
				status(st){
					this.active = st;
					return this;
				},
				json(result){
					expect(result).to.deep.equal({
						user: userDocument
					});
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
					email: 		'',
					password: 	'',
				}
			};
		routes.getModel = (name)=>{
			return {
				authorize: (email, password)=>{
					return new Promise((res, rej)=>{
						res(userDocument);
					});
				}
			};
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, (err)=>{
			expect(false).to.be.ok;
			done();
		});
	});
*/
	it('login - user not found', (done) => {
		let userDocument = undefined,
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
					email: 		'',
					password: 	'',
				}
			};
		routes.getModel = (name)=>{
			return {
				authorize: (email, password)=>{
					return new Promise((res, rej)=>{
						res(userDocument);
					});
				}
			};
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, (err)=>{
			expect(false).to.be.ok;
			done();
		});
	});


	it('login - authorize throwing vanilla Error', (done) => {
		let userDocument = undefined,
			res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(false).to.be.ok;
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
		routes.getModel = (name)=>{
			return {
				authorize: (email, password)=>{
					return new Promise((res, rej)=>{
						rej(new Error(notLocale.say('user_not_found')));
					});
				}
			};
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, (err)=>{
			expect(err).to.be.instanceof(Error);
			done();
		});
	});

	it('login - authorize throwing notError', (done) => {
		let res = {
				status(st){
					this.status = st;
					return this;
				},
				json(result){
					expect(this.status).to.be.equal(403);
					expect(result).to.be.deep.equal({
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
					email: 		'',
					password: 	'',
				}
			};
		routes.getModel = (name)=>{
			return {
				authorize: (email, password)=>{
					return new Promise((res, rej)=>{
						rej(new notError(notLocale.say('user_not_found')));
					});
				}
			};
		};
		routes.getModelSchema = ()=>{
			return User.thisSchema;
		};
		routes.login(req, res, (err)=>{
			expect(false).to.be.ok;
			done();
		});
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
		routes.logout(req, res, (err)=>{
			expect(false).to.be.ok;
			done();
		});
	});
});
