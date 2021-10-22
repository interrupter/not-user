require('not-log').muted = true;

const testPaths = require('./options.js'),
  expect = require('chai').expect,
  path = require('path'),
  configPath = path.join(__dirname, testPaths.config),
  notConf = require('not-config'),
  notNode = require('not-node'),
  OneTimeCode = require('not-one-time-code/src/models/oneTimeCode'),
  routes = require('../../src/routes/user.js'),
  User = require('../../src/models/user.js'),
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

};

const TEST_ENV = {
  routes,
  config,
  notNode,
  expect,
  stubApp,
  stubResponse,
  stubRequest,
  stubModuleEnv,
  modelsEnv
};

describe('routes/user', function() {

  require('./routes/login')(TEST_ENV);
  require('./routes/logout')(TEST_ENV);
  require('./routes/register')(TEST_ENV);
  require('./routes/confirmEmail')(TEST_ENV);
  require('./routes/requestLoginCodeOnEmail')(TEST_ENV);
  require('./routes/loginByCode')(TEST_ENV);
  require('./routes/requestPasswordReset')(TEST_ENV);
  require('./routes/resetPassword')(TEST_ENV);
  require('./routes/changePassword')(TEST_ENV);
  require('./routes/profile')(TEST_ENV);
  require('./routes/status')(TEST_ENV);
  require('./routes/token')(TEST_ENV);
  require('./routes/get')(TEST_ENV);
  require('./routes/update')(TEST_ENV);
  require('./routes/_create')(TEST_ENV);
  require('./routes/_update')(TEST_ENV);
  require('./routes/_delete')(TEST_ENV);
  require('./routes/_steal')(TEST_ENV);

});
