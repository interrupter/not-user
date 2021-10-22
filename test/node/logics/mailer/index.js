module.exports = (TEST_ENV) => {
  describe('mailer', function() {
    require('./sendConfirmationEmail')(TEST_ENV);
    require('./sendOneTimeLoginCode')(TEST_ENV);
    require('./sendPasswordRestorationCode')(TEST_ENV);
    require('./sendNewPassword')(TEST_ENV);
    require('./sendChangePasswordNotification')(TEST_ENV);
  });
};
