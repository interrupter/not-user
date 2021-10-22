module.exports = (TEST_ENV) => {
  describe('init', function() {

    require('./getInitialRootValues')(TEST_ENV);
    require('./createRootUser')(TEST_ENV);
    require('./initialize')(TEST_ENV);
    
    /*
    */
  });
};
