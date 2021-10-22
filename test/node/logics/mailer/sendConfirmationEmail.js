const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring');

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

  describe('sendConfirmationEmail', function() {

    it('ok', async () => {
      const user = {
        _id: mongoose.Types.ObjectId(),
        email: 'test@fakemymail.now'
      };
      notNode.Application = stubApp({
        ...modelsEnv,
        inform(params){
          expect(params).to.have.keys(['reciever', 'tags', 'link']);
          expect(params.reciever.email).to.be.equal(user.email);
          expect(params.tags).to.be.deep.equal(['userEmailConfirmationLink']);
          const linkParts = querystring.parse(url.parse(params.link).query);
          expect(OneTimeCode.OneTimeCode.isCode(linkParts.code)).to.be.ok;
        }
      });
      await MailerLogics.UserMailer.sendConfirmationEmail({user});
    });

  });

};
