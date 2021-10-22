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
    let data = {
      username: 'rootUserTest',
      email: 'rootUserTest@mail.org',
      password: 'register_mail.org',
    };

    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv
      });
      const result = await UserLogics.User.createRootUser(notNode.Application, data);
      expect(result).to.be.ok;
      expect(result.role).to.be.deep.equal(['root']);
    });

    it('failure, same username and email used', async () => {
      notNode.Application = stubApp({
        ...modelsEnv
      });
      try{
        await UserLogics.User.createRootUser(notNode.Application, data);
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_uniqueness_verification_error');
      }
    });

  });
};
