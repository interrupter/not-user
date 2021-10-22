module.exports = (TEST_ENV) => {
  describe('user', function() {
    require('./createNewUserDocument')(TEST_ENV);
    require('./register')(TEST_ENV);
    require('./confirmEmail')(TEST_ENV);
    require('./profile')(TEST_ENV);
    require('./checkUserSupremacy')(TEST_ENV);
    require('./loadUser')(TEST_ENV);
    require('./update')(TEST_ENV);
    require('./createUser')(TEST_ENV);
    require('./createRootUser')(TEST_ENV);
    require('./checkAgainstSuicide')(TEST_ENV);
    require('./delete')(TEST_ENV);
    require('./get')(TEST_ENV);
  });
};
