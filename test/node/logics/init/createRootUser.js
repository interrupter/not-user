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
  User,
  OneTimeCode
}) => {
  describe('createRootUser', function() {
    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//User': UserLogics.User,
          'not-user//Auth': AuthLogics.Auth
        }
      });
      await InitLogics.Init.createRootUser(notNode.Application);
      const rootUser = await User.User.findOne({__latest: true, __closed: false, username: 'rootUserFromCOnfig'});
      expect(rootUser).to.be.ok;
      expect(rootUser.email).to.be.equal('rootUserFromCOnfig@mail.local');
    });

  });
};
