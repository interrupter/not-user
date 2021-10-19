const testPaths = require('./options.js'),
  expect = require('chai').expect,
  notError = require('not-error').notError,
  path = require('path'),
  configPath = path.join(__dirname, testPaths.config),
  notConf = require('not-config'),
  notNode = require('not-node'),
  notLocale = require('not-locale'),
  localDB = require('./db.js'),
  OneTimeCode = require('not-one-time-code/src/models/oneTimeCode'),
  User = require('../../src/models/user.js'),
  UserLogic = require('../../src/logics/user.js'),
  JWT = require('jsonwebtoken');

notConf.init(configPath);
let config = notConf.createReader();

describe('logics/user', function() {

  before((done) => {
    notLocale.fromDir(path.join(__dirname, '../../src/locales'));
    notLocale.fromDir(require('not-one-time-code').paths.locales);
    localDB.init('logics', done);
  });

  after((done) => {
    localDB.destroy('logics', done);
  });


  describe('logics/user - in memory mongoDB', function() {
    before(function(done) {
      let userDocument = {
        email: 'test@mail.org',
        username: 'test_mail.org',
        password: 'test_mail.org',
        emailConfirmed: true,
        role: ['user'],
        active: true
      };
      User.User.add(userDocument).then(() => done()).catch(done);
    });

    it('TODO', async()=>{

    });

  });

});
