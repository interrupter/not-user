const {
  notError,
  notValidationError,
  notRequestError
} = require('not-error');

const mongoose = require('mongoose');

module.exports = ({
  OneTimeCodeLogics,
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
  describe('resetPassword', function() {
    let oneTimePasses = [],
      oneTimeUser = null;

    before(async () => {
      oneTimeUser = await ((User.User.add({
        email: 'oneTimeTester@email.com',
        username: 'oneTimeTester',
        emailConfirmed: false,
        password: 'oneTimeTester'
      })))
      const createCode = (action) => {
        return OneTimeCode.OneTimeCode.createCode({
          email: oneTimeUser.email,
          owner: oneTimeUser._id,
          action: action
        });
      }
      oneTimePasses = await Promise.all([
        createCode('resetPassword'),
        createCode('loginByCode'),
        createCode('resetPassword'),
        OneTimeCode.OneTimeCode.createCode({
          email: oneTimeUser.email,
          owner: mongoose.Types.ObjectId(),
          action: 'resetPassword'
        })
      ]);
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode
        }
      });
    });


    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//UserMailer': {
            async sendNewPassword({
              user,
              pass
            }) {
              expect(user).to.be.ok;
              expect(pass).to.be.ok;
            }
          },
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode
        }
      });
      const result = await AuthLogics.Auth.resetPassword({
        code: oneTimePasses[0].code
      });
      expect(result).to.be.undefined;
    });

    it('failed, wrong code payload action', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode,
          'not-user//UserMailer': {
            async sendNewPassword({
              user,
              pass
            }) {
              expect(user).to.be.ok;
              expect(pass).to.be.ok;
            }
          }
        }
      });
      try {
        await AuthLogics.Auth.resetPassword({
          code: oneTimePasses[1].code
        });
      } catch (e) {
        expect(e).to.be.instanceof(notError);
        expect(e.message).to.be.equal('not-user:one_time_code_action_not_valid');
      }
    });

    it('failed, inform throw', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode,
          'not-user//UserMailer': {
            async sendNewPassword() {
              throw new Error('sendNewPassword');
            }
          }
        }
      });
      try {
        await AuthLogics.Auth.resetPassword({
          code: oneTimePasses[2].code
        });
      } catch (e) {
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('sendNewPassword');
        expect(e.options.code).to.be.equal(500);
        expect(e.options.redirect).to.be.equal('/resetPasswordError');
      }
    });

    it('failed, user not found throw', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode
        }
      });
      try {
        await AuthLogics.Auth.resetPassword({
          code: oneTimePasses[3].code
        });
      } catch (e) {
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_not_found');
      }
    });

  });
}
