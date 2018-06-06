
const testPaths = require('./options.js'),
	expect = require('chai').expect,
	assert = require('chai').assert,
	mongoose = require('mongoose'),
	notError = require('not-error'),
	path = require('path'),
	crypto = require('crypto'),
	config = require('not-config').init(testPaths.config),
	log = require('not-log')(testPaths.log)(module),
	remember = require('./remember'),
	domain = require('not-node').notDomain,
	notLocale = require('not-locale'),
	routes = require('../src/routes/user.js'),
	User = require('../src/models/user.js');

describe('models/user - localy isolated in mockup without actually querying MongoDB', function () {
	before(function (done) {
		notLocale.fromDir(path.join(__dirname, '../src/locales'));
		done();
	});
	describe('statics', function () {
		describe('authorize', function () {
			it('undefined', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res, rej)=>{
								res(undefined);
							});
						}
					};
				};
				User.thisStatics.authorize('email','password')
					.then(()=>{
						expect(false).to.be.true;
					})
					.catch((err)=>{
						expect(err).to.be.instanceof(notError);
						expect(err.message).to.be.equal(notLocale.say('user_not_found'));
						done();
					});
			});

			it('empty user', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res, rej)=>{
								rej(new Error('qwerty Error'));
							});
						}
					};
				};
				User.thisStatics.authorize('email','password')
					.then(()=>{
						expect(false).to.be.true;
					})
					.catch((err)=>{
						expect(err).to.be.instanceof(notError);
						expect(err.message).to.be.equal(notLocale.say('user_not_found'));
						done();
					});
			});

			it('user exists, wrong pass', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res, rej)=>{
								res({
									checkPassword(){
										return false;
									}
								});
							});
						}
					};
				};
				User.thisStatics.authorize('email','password')
					.then(()=>{
						expect(false).to.be.true;
					})
					.catch((err)=>{
						expect(err).to.be.instanceof(notError);
						expect(err.message).to.be.equal(notLocale.say('password_incorrect'));
						done();
					});
			});

			it('user exists, pass is correct', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res, rej)=>{
								res({
									checkPassword(){
										return true;
									},
									active: true
								});
							});
						}
					};
				};
				User.thisStatics.authorize('email','password')
					.then((user)=>{
						expect(user.active).to.be.true;
						done();
					})
					.catch((err)=>{
						expect(false).to.be.true;
					});
			});
		});

		describe('toggleStatus', function () {
			it('item exists and has `active` field', (done) => {
				User.thisStatics.findById = ()=>{
					return new Promise((res)=>{
						let item;
						item = {
							active: true,
							save(){
								return new Promise((res1)=>{
									res1(item);
								});
							}
						};
						res(item);
					});
				};
				User.thisStatics.toggleStatus()
					.then((item)=>{
						expect(item.active).to.be.false;
						done();
					})
					.catch((err)=>{
						expect(false).to.be.true;
						done(err);
					});
			});

			it('item exists and has not `active` field', (done) => {
				User.thisStatics.findById = ()=>{
					return new Promise((res)=>{
						let item;
						item = {
							save(){
								return new Promise((res1)=>{
									res1(item);
								});
							}
						};
						res(item);
					});
				};
				User.thisStatics.toggleStatus()
					.then((item)=>{
						expect(item.active).to.be.true;
						done();
					})
					.catch((err)=>{
						expect(false).to.be.true;
						done(err);
					});
			});

			it('item does exists', (done) => {
				User.thisStatics.findById = ()=>{
					return new Promise((res)=>{
						res(null);
					});
				};
				User.thisStatics.toggleStatus()
					.then(()=>{
						expect(false).to.be.true;
						done();
					})
					.catch((err)=>{
						expect(err).to.be.instanceof(notError);
						done();
					});
			});
		});

		describe('clearFromUnsafe', function () {
			it('check', () => {
				let item = {
					hashedPassword: '1',
					salt: '2'
				};
				let cleared = User.thisStatics.clearFromUnsafe(item);
				expect(cleared).to.not.have.property('hashedPassword');
				expect(cleared).to.not.have.property('salt');
			});
		});

		describe('fieldValueExists', function () {
			it('exists', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res)=>{
								res({_id:'123123123'});
							});
						}
					};
				};
				User.thisStatics.fieldValueExists('email', 'me.please')
					.then((result)=>{
						expect(result).to.be.true;
						done();
					})
					.catch((err)=>{
						done(err);
					});
			});

			it('does not exists', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res)=>{
								res(false);
							});
						}
					};
				};
				User.thisStatics.fieldValueExists('email', 'me.please')
					.then((result)=>{
						expect(result).to.be.false;
						done();
					})
					.catch((err)=>{
						done(err);
					});
			});

			it('throws', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res, rej)=>{
								rej(new Error('some error'));
							});
						}
					};
				};
				User.thisStatics.fieldValueExists('email', 'me.please')
					.then((result)=>{
						expect(true).to.be.false;
						done();
					})
					.catch((err)=>{
						expect(err).to.be.instanceof(Error);
						done();
					});
			});
		});

		describe('usernameExists', function () {
			it('exists', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res)=>{
								res({_id:'123123123'});
							});
						}
					};
				};
				User.thisStatics.usernameExists('me.please')
					.then((result)=>{
						expect(result).to.be.true;
						done();
					})
					.catch((err)=>{
						done(err);
					});
			});

			it('does not exists', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res)=>{
								res(false);
							});
						}
					};
				};
				User.thisStatics.usernameExists('me.please')
					.then((result)=>{
						expect(result).to.be.false;
						done();
					})
					.catch((err)=>{
						done(err);
					});
			});

			it('throws', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res, rej)=>{
								rej(new Error('some error'));
							});
						}
					};
				};
				User.thisStatics.usernameExists('me.please')
					.then((result)=>{
						expect(true).to.be.false;
						done();
					})
					.catch((err)=>{
						expect(err).to.be.instanceof(Error);
						done();
					});
			});
		});

		describe('emailExists', function () {
			it('exists', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res)=>{
								res({_id:'123123123'});
							});
						}
					};
				};
				User.thisStatics.emailExists('me.please')
					.then((result)=>{
						expect(result).to.be.true;
						done();
					})
					.catch((err)=>{
						done(err);
					});
			});

			it('does not exists', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res)=>{
								res(false);
							});
						}
					};
				};
				User.thisStatics.emailExists('me.please')
					.then((result)=>{
						expect(result).to.be.false;
						done();
					})
					.catch((err)=>{
						done(err);
					});
			});

			it('throws', (done) => {
				User.thisStatics.findOne = ()=>{
					return {
						exec(){
							return new Promise((res, rej)=>{
								rej(new Error('some error'));
							});
						}
					};
				};
				User.thisStatics.emailExists('me.please')
					.then((result)=>{
						expect(true).to.be.false;
						done();
					})
					.catch((err)=>{
						expect(err).to.be.instanceof(Error);
						done();
					});
			});
		});
	});

	describe('methods', function () {
		it('isRole', () => {
			User.thisMethods.role = ['root'];
			expect(User.thisMethods.isRole('role')).to.be.false;
			expect(User.thisMethods.isRole('root')).to.be.true;
			expect(User.thisMethods.isRoot()).to.be.true;
			expect(User.thisMethods.isAdmin()).to.be.false;
			expect(User.thisMethods.isClient()).to.be.false;
			expect(User.thisMethods.isUser()).to.be.false;
		});

		it('encryptPassword', () => {
			let pass = 'qwerty_password',
				salt = 'salty_jelly_fish',
				hash = crypto.createHmac('sha1', salt).update(pass).digest('hex');
			User.thisMethods.salt = salt;
			expect(User.thisMethods.encryptPassword(pass)).to.be.equal(hash);
		});

		it('checkPassword', () => {
			let pass = 'qwerty_password',
				salt = 'salty_jelly_fish',
				hash = crypto.createHmac('sha1', salt).update(pass).digest('hex');
			User.thisMethods.salt = salt;
			User.thisMethods.hashedPassword = hash;
			expect(User.thisMethods.checkPassword(pass)).to.be.ok;
			expect(User.thisMethods.checkPassword(pass+'1')).to.be.false;
			expect(User.thisMethods.checkPassword('')).to.be.false;
			expect(User.thisMethods.checkPassword(false)).to.false;
			expect(User.thisMethods.checkPassword(true)).to.be.false;
			expect(User.thisMethods.checkPassword(null)).to.be.false;
			expect(User.thisMethods.checkPassword(undefined)).to.be.false;
		});

		it('registerAs', () => {
			User.thisMethods.save = ()=>{};
			User.thisMethods.role = [];
			let role = 'root';
			expect(User.thisMethods.registerAs(role)).to.be.deep.equal(User.thisMethods);
			expect(User.thisMethods.registerAs(role)).to.be.deep.equal(User.thisMethods);
			expect(User.thisMethods.role).to.be.deep.equal([role]);
		});

		it('deregisterAs', () => {
			User.thisMethods.save = ()=>{};
			User.thisMethods.role = ['root'];
			let role = 'root';
			expect(User.thisMethods.deregisterAs(role)).to.be.deep.equal(User.thisMethods);
			expect(User.thisMethods.role).to.be.deep.equal([]);
			expect(User.thisMethods.deregisterAs(role));
			expect(User.thisMethods.role).to.be.deep.equal([]);
		});


		it('confirmEmail', () => {
			expect(User.thisMethods.confirmEmail()).to.be.deep.equal(User.thisMethods);
			expect(User.thisMethods.emailConfirmed).to.be.ok;
			expect(User.thisMethods.confirm).to.be.equal('');
			expect(User.thisMethods.role).to.be.include('confirmed');
		});
	});
});
