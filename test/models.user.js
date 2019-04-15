
const testPaths = require('./options.js'),
	expect = require('chai').expect,
	assert = require('chai').assert,
	notError = require('not-error'),
	path = require('path'),
	crypto = require('crypto'),
	config = require('not-config').init(testPaths.config),
	log = require('not-log')(testPaths.log)(module),
	remember = require('./remember'),
	domain = require('not-node').notDomain,
	notLocale = require('not-locale'),
	routes = require('../src/routes/user.js'),
	Proto = require('not-node').Proto,
	User = require('../src/models/user.js'),
	mongoose = require('mongoose'),
	MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer,
	mongoServer = new MongoMemoryServer();

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
			Proto.fabricate(User, {}, mongoose);
			console.log('DB connected, User model fabricated!');
			done();
		})
		.catch((e)=>{
			console.error(e);
			done(e);
		});
});

after((done) => {
	mongoose.disconnect();
	mongoServer.stop();
	done();
});


describe('models/user - localy isolated in mockup without actually querying MongoDB', function () {
	before(function (done) {
		notLocale.fromDir(path.join(__dirname, '../src/locales'));
		done();
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

	describe('statics', function () {
		it('adding user', (done) => {
			(new User.User({
				email: 'test@email.com',
				username: 'testUser',
				emailConfirmed: false,
				password: 'qwerty'
			})).save().then((user)=>{
				expect(user.active).to.be.true;
				expect(user.emailConfirmed).to.be.false;
				expect(user.role).to.be.deep.equal(['user']);
				done();
			}).catch(done);
		});
	});
	describe('authorize', function () {
		it('undefined', (done) => {
			User.User.authorize('email','password')
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
			User.User.authorize('test@email.com','password')
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
			User.User.authorize('test@email.com','qwerty')
				.then((user)=>{
					expect(user.active).to.be.true;
					done();
				})
				.catch((err)=>{
					expect(false).to.be.true;
				});
		});
	});

	describe('toggleActive', function () {
		it('item exists and has `active` field', (done) => {
			(new User.User({
				email: 'tester@email.com',
				username: 'testerUser',
				emailConfirmed: false,
				password: 'qwertyStory'
			})).save().then(async (user)=>{
				try{
					let userAfter = await User.User.toggleActive(user._id);
					expect(userAfter.active).to.be.false;
					done();
				}catch(e){
					done(e);
				}
			}).catch(done);
		});

		it('item does exists', (done) => {
			User.User.toggleActive('5cb41aa82c821a441c1ded21')
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
			let cleared = User.User.clearFromUnsafe(item);
			expect(cleared).to.not.have.property('hashedPassword');
			expect(cleared).to.not.have.property('salt');
		});
	});


	describe('fieldValueExists', function () {
		it('exists', function(done) {

			((new User.User({
				email: 'tester312@email.com',
				username: 'testerUser312',
				emailConfirmed: false,
				password: 'qwertyStory'
			})).save())
				.then(()=>{
					User.User.fieldValueExists('username', 'testerUser312')
						.then((result)=>{
							expect(result).to.be.true;
							done();
						})
						.catch((err)=>{
							done(err);
						});
				})
				.catch(done);
		});

		it('does not exists', (done) => {
			try{
				User.User.fieldValueExists('email', 'me.please@test.com')
					.then((result)=>{
						expect(result).to.be.false;
						done();
					})
					.catch((err)=>{
						done(err);
					});
			}catch(e){
				done(e);
			}
		});

		it('throws', (done) => {
			User.User.fieldValueExists(['emailEncrypted'], 'me.please')
				.then(()=>{
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
			User.User.usernameExists('testerUser312')
				.then((result)=>{
					expect(result).to.be.true;
					done();
				})
				.catch((err)=>{
					done(err);
				});
		});

		it('does not exists', (done) => {
			User.User.usernameExists('testerUser31212')
				.then((result)=>{
					expect(result).to.be.false;
					done();
				})
				.catch((err)=>{
					done(err);
				});
		});

		it('throws', (done) => {
			User.User.usernameExists(['me.please'])
				.then(()=>{
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
			User.User.emailExists('tester312@email.com')
				.then((result)=>{
					expect(result).to.be.true;
					done();
				})
				.catch((err)=>{
					done(err);
				});
		});

		it('does not exists', (done) => {
			User.User.emailExists('tester312@email.com12')
				.then((result)=>{
					expect(result).to.be.false;
					done();
				})
				.catch((err)=>{
					done(err);
				});
		});

		it('throws', (done) => {
			User.User.emailExists(['tester312@email.com'])
				.then(()=>{
					expect(true).to.be.false;
					done();
				})
				.catch((err)=>{
					expect(err).to.be.instanceof(Error);
					done();
				});
		});
	});

	describe('getByFieldValue', function () {
		it('exists', (done) => {
			User.User.getByFieldValue('email', 'tester312@email.com')
				.then((result)=>{
					expect(result.username).to.be.equal('testerUser312');
					done();
				})
				.catch((err)=>{
					done(err);
				});
		});

		it('does not exists', (done) => {
			User.User.getByFieldValue('email', 'me.please')
				.then((result)=>{
					expect(result).to.be.not.ok;
					done();
				})
				.catch((err)=>{
					done(err);
				});
		});

		it('throws', (done) => {
			User.User.getByFieldValue(['email'], 'me.please')
				.then(()=>{
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
