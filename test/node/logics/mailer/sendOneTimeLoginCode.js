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

  describe('sendOneTimeLoginCode', function() {

    it('ok', async () => {
      const user = {
        _id: mongoose.Types.ObjectId(),
        email: 'test@fakemymail.now'
      };
      notNode.Application = stubApp({
        ...modelsEnv,
        async inform(params){
          expect(params).to.have.keys(['reciever', 'tags', 'link']);
          expect(params.reciever.email).to.be.equal(user.email);
          expect(params.tags).to.be.deep.equal(['userOneTimeLoginLink']);
          const linkParts = querystring.parse(url.parse(params.link).query);
          expect(OneTimeCode.OneTimeCode.isCode(linkParts.code)).to.be.ok;
          const codeData = await OneTimeCode.OneTimeCode.findValid(linkParts.code);
          expect(codeData.payload).to.be.ok;
          expect(codeData.payload.owner.toString()).to.be.equal(user._id.toString());
          expect(codeData.payload.action).to.be.equal('loginByCode');
        }
      });
      await  MailerLogics.UserMailer.sendOneTimeLoginCode({user});
    });

  });

};
