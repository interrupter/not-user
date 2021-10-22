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
  describe('changePassword', function() {
    let oneTimeUser = null;
    before(async () => {
      oneTimeUser = await ((User.User.add({
        email: 'oneTimeTester@email.com',
        username: 'oneTimeTester',
        emailConfirmed: false,
        password: 'oneTimeTester'
      })));

      notNode.Application = stubApp({
        ...modelsEnv
      });
    });

    it('ok', async() => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//UserMailer': {
            async sendChangePasswordNotification({user}){
              expect(user).to.be.ok;
              expect(user._id.toString()).to.be.equal(oneTimeUser._id.toString());
            }
          }
        }
      });
      const result = await AuthLogics.Auth.changePassword({
        user: oneTimeUser,
        oldPass: 'oneTimeTester',
        newPass: 'new_pass',
        ip: '127.0.0.1'
      });
      expect(result).to.be.ok;
      expect(result.status).to.be.equal('ok');
    });

    it('exception - password_incorrect', async() => {
      notNode.Application = stubApp({
        ...modelsEnv
      });
      try{
        await AuthLogics.Auth.changePassword({
          user: oneTimeUser,
          oldPass: 'oneTimeTester',
          newPass: 'new_pass',
          ip: '127.0.0.1'
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.options.code).to.be.equal(403);
        expect(e.options.errors).to.be.deep.equal({
          oldPassword: ['not-user:password_incorrect']
        });
      }
    });

    it('exception - password_length_not_valid', async() => {
      notNode.Application = stubApp({
        ...modelsEnv
      });
      try{
        await AuthLogics.Auth.changePassword({
          user: oneTimeUser,
          oldPass: 'new_pass',
          newPass: '123',
          ip: '127.0.0.1'
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.options.code).to.be.equal(403);
        expect(e.options.errors).to.be.deep.equal({
          newPassword: ['not-user:password_length_not_valid']
        });
      }
    });

  });
}
