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

  describe('requestPasswordReset', function() {
    let oneTimePasses = [],
      oneTimeUser = null;

    before(async () => {
      oneTimeUser = await ((User.User.add({
        email: 'oneTimeTester@email.com',
        username: 'oneTimeTester',
        emailConfirmed: false,
        password: 'oneTimeTester'
      })))
      const createCode = ()=>{
        return OneTimeCode.OneTimeCode.createCode({
          email: oneTimeUser.email,
          owner: oneTimeUser._id,
          action: 'loginByCode'
        });
      }
      oneTimePasses = await Promise.all([createCode(),createCode(),createCode()]);
      notNode.Application = stubApp({
        ...modelsEnv
      });
    });

    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//UserMailer':{
            async sendPasswordResetCode(){}
          }
        }
      });
      const result = await AuthLogics.Auth.requestPasswordReset({email: 'oneTimeTester@email.com'});
      expect(result).to.be.ok;
      expect(result.status).to.be.equal('ok');
      expect(result.message).to.be.equal('not-user:request_password_reset_success_link');
    });

    it('failed, misformed email', async () => {
      try {
        await AuthLogics.Auth.requestPasswordReset({
          email: ''
        });
      } catch (e) {
        expect(e).to.be.instanceof(notValidationError);
        expect(e.message).to.be.equal('not-user:email_not_valid');
        expect(e.options.fields).to.be.deep.equal({
          email: ['not-user:email_not_valid']
        });
      }

    });

    it('failed, UserMailer.sendPasswordRestorationCode throws', async () => {
      try {
        notNode.Application = stubApp({
          ...modelsEnv,
          logics: {
            'not-user//UserMailer':{
              async sendPasswordResetCode(){
                throw new Error('sendPasswordRestorationCode');
              }
            }
          }
        });
        await AuthLogics.Auth.requestPasswordReset({
          email: oneTimeUser.email
        });
      } catch (e) {
        expect(e).to.be.instanceof(Error);
        expect(e.message).to.be.equal('sendPasswordRestorationCode');
      }

    });


  });
}
