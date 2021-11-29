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
        password: 'fourthTimeTester',
        role: ['user']
      })));
    });

    it('ok', async() => {
      const res = await UserLogics.User.profile({activeUser:oneTimeUser});
      console.log(res);
      expect(res).to.be.ok;
    });
  });

};
