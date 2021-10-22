module.exports = (TEST_ENV) => {
  describe('auth', function() {
    require('./login')(TEST_ENV);
    require('./requestLoginCodeOnEmail')(TEST_ENV);
    require('./loginByCode')(TEST_ENV);
    require('./requestPasswordReset')(TEST_ENV);
    require('./resetPassword')(TEST_ENV);
    require('./changePassword')(TEST_ENV);
    require('./token')(TEST_ENV);
    require('./userHaveSupremacy')(TEST_ENV);
  });
};
