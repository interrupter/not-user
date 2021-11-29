const
  notNode = require('not-node'),
  expect = require('chai').expect,
  {
    stubApp,
    stubResponse,
    stubRequest,
    stubModuleEnv
  } = require('../stub');

notNode.Fields.importFromDir(__dirname + '/../../node_modules/not-node/src/core/fields');
notNode.Fields.importFromDir(__dirname + '/../../src/fields');

const TEST_ENV = {
  notNode,
  expect,
  stubApp,
  stubResponse,
  stubRequest,
  stubModuleEnv
};


describe('forms', function() {
  require('./forms/_create')(TEST_ENV);
  /*require('./forms/login')(TEST_ENV);
  require('./forms/logout')(TEST_ENV);
  require('./forms/register')(TEST_ENV);
  require('./forms/confirmEmail')(TEST_ENV);
  require('./forms/requestLoginCodeOnEmail')(TEST_ENV);
  require('./forms/loginByCode')(TEST_ENV);
  require('./forms/requestPasswordReset')(TEST_ENV);
  require('./forms/resetPassword')(TEST_ENV);
  require('./forms/changePassword')(TEST_ENV);
  require('./forms/profile')(TEST_ENV);
  require('./forms/status')(TEST_ENV);
  require('./forms/token')(TEST_ENV);
  require('./forms/get')(TEST_ENV);
  require('./forms/update')(TEST_ENV);
  require('./forms/_update')(TEST_ENV);
  require('./forms/_delete')(TEST_ENV);
  require('./forms/_steal')(TEST_ENV);*/

});
