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
  describe('confirmEmail', function() {
    let oneTimeUser;
    let oneTimePasses = [];
    before(async () => {

      oneTimeUser = await ((User.User.add({
        email: 'emailConfirmationTest1@email.com',
        username: 'emailConfirmationTest1123',
        emailConfirmed: false,
        password: 'emailConfirmationTest1'
      })));

      oneTimePasses.push(
        await OneTimeCode.OneTimeCode.createCode({
          email: oneTimeUser.email,
          owner: oneTimeUser._id,
          action: 'confirmEmail'
        })
      );

    });

    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode
        }
      });
        let result = await UserLogics.User.confirmEmail(oneTimePasses[0].code);
        expect(result).to.be.ok;
        expect(result.status).to.be.equal('ok');
        const userAfterConfirmation = await User.User.findById(oneTimeUser._id);
        expect(userAfterConfirmation.emailConfirmed).to.be.true;
    });

    it('failed, exception - code is used', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode
        }
      });
      try {
        await UserLogics.User.confirmEmail(oneTimePasses[0].code);
      } catch (e) {
        expect(e).to.be.ok;
      }
    });

    it('failed, exception - code is faked', async () => {
      notNode.Application = stubApp({ ...modelsEnv,
        logics: {
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode
        }
      });
      try {
        await UserLogics.User.confirmEmail(mongoose.Types.ObjectId());
      } catch (e) {
        expect(e).to.be.ok;
      }
    });
  });
}
