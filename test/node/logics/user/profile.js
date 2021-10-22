const {
  notError,
  notValidationError,
  notRequestError
} = require('not-error');
module.exports = ({
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
  User
}) => {
  describe('profile', function() {
    let oneTimeUser;
    before(async () => {
      oneTimeUser = await ((User.User.add({
        email: 'fourthTimeTester@email.com',
        username: 'fourthTimeTester',
        emailConfirmed: false,
        password: 'fourthTimeTester'
      })));
    });

    it('ok', async() => {
      const res = await UserLogics.User.profile({activeUser:oneTimeUser});
      expect(res).to.be.ok;
      expect(res.status).to.be.equal('ok');
      expect(res.result).to.be.ok;
    });
  });

};
