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

  describe('sendNewPassword', function() {

    it('ok', async () => {
      const wordNew = '1235414521346';
      const user = {
        _id: mongoose.Types.ObjectId(),
        email: 'test@fakemymail.now'
      };
      notNode.Application = stubApp({
        ...modelsEnv,
        async inform(params){
          expect(params).to.have.keys(['reciever', 'tags', 'pass']);
          expect(params.reciever.email).to.be.equal(user.email);
          expect(params.tags).to.be.deep.equal(['userPasswordNew']);
          expect(params.pass).to.be.equal(wordNew);
        }
      });
      await  MailerLogics.UserMailer.sendNewPassword({user, pass: wordNew});
    });

  });

};
