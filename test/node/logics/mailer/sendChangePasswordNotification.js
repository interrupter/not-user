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
  User
}) => {

  describe('sendChangePasswordNotification', function() {
    it('ok', async () => {
      const user = { email: 'test@fakemymail.now' };
      notNode.Application = stubApp({
        ...modelsEnv,
        inform(params){
          expect(params).to.have.keys(['reciever', 'tags']);
          expect(params.reciever.email).to.be.equal('test@fakemymail.now');
          expect(params.tags).to.be.deep.equal(['userChangePasswordNotification']);
        }
      });
      await MailerLogics.UserMailer.sendChangePasswordNotification({user});
    });

  });

};
