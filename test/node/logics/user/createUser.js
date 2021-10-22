const mongoose = require('mongoose');

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
  describe('createUser', function() {

    let data = {
      username: 'useasdfrnameTest',
      email: 'registerasdf@mail.org',
      password: 'register_mail.org',
    };

    let data2 = {
      username: 'useasdasdfrnameTest',
      email: 'registesdrasdf@mail.org',
      password: 'register_mail.org',
    };


    const activeUser = {
      _id: mongoose.Types.ObjectId(),
      role: 'admin'
    }

    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//UserMailer': {
            async sendConfirmationEmail(params){
              expect(params).to.have.keys(['user']);
              expect(params.user).to.be.ok;
              expect(params.user.email).to.be.ok;
            }
          }
        }
      });
      const result = await UserLogics.User.createUser({
        activeUser,
        data,
        ip: '127.0.0.1'
      });
      expect(result).to.be.ok;
      expect(result.status).to.be.equal('ok');
    });


    it('failure, mailer exception', async () => {

      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//UserMailer': {
            async sendConfirmationEmail(){
            throw new Error('sendConfirmationEmail');
            }
          }
        }
      });
      try{
        await UserLogics.User.createUser({
          activeUser,
          data:data2,
          ip: '127.0.0.1'
        });
        expect(false).to.be.ok;

      }catch(e){
        expect(e).to.be.instanceof(Error);
        expect(e.message).to.be.equal('sendConfirmationEmail');
      }

    });

  });
};
