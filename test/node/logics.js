require('not-log').muted = true;

const testPaths = require('./options.js'),
  expect = require('chai').expect,
  path = require('path'),
  configPath = path.join(__dirname, testPaths.config),
  notConf = require('not-config'),
  notNode = require('not-node'),
  notLocale = require('not-locale'),
  localDB = require('./db.js'),
  OneTimeCodeLogics = require('../../src/logics/otc.js'),
  UserLogics = require('../../src/logics/user.js'),
  AuthLogics = require('../../src/logics/auth.js'),
  MailerLogics = require('../../src/logics/mailer.js'),
  InitLogics = require('../../src/logics/init.js'),

  OneTimeCode = require('not-one-time-code/src/models/oneTimeCode'),
  User = require('../../src/models/user'),

  JWT = require('jsonwebtoken'),
  {
    stubApp,
    stubResponse,
    stubRequest,
    stubModuleEnv
  } = require('../stub');

notConf.init(configPath);
let config = notConf.createReader();

const modelsEnv = {

  schemes: {
    'User': User.thisSchema,
    'not-user//User': User.thisSchema,
  }
};

const TEST_ENV = {
  OneTimeCodeLogics,
  UserLogics,
  AuthLogics,
  MailerLogics,
  InitLogics,
  config,
  JWT,
  notNode,
  expect,
  stubApp,
  stubResponse,
  stubRequest,
  stubModuleEnv,
  modelsEnv,
  OneTimeCode,
  User
};

describe('logics', function() {
  before((done) => {
    notLocale.fromDir(path.join(__dirname, '../../src/locales'));
    notLocale.fromDir(require('not-one-time-code').paths.locales);
    localDB.init('logics', (err) => {
      console.error(err)
      try{
        modelsEnv.models = {
          'User': User.User,
          'not-user//User': User.User,
          'OneTimeCode': OneTimeCode.OneTimeCode
        };
        done();
      }catch(e){
        console.error(e);
      }
    });
  });

  after((done) => {
    localDB.destroy('logics', done);
  });


  require('./logics/auth')(TEST_ENV);
  require('./logics/init')(TEST_ENV);
  require('./logics/mailer')(TEST_ENV);
  require('./logics/user')(TEST_ENV);


});
