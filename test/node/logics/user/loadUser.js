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

  describe('loadUser', function() {
    let oneTimeUser;
    before(async () => {
      oneTimeUser = await ((User.User.add({
        email: 'fourthTimeTester@email.com',
        username: 'fourthTimeTester',
        emailConfirmed: false,
        password: 'fourthTimeTester'
      })));
    });

    it('ok', async() => {
      const res = await UserLogics.User.loadUser(oneTimeUser._id);
      expect(res).to.be.ok;
      expect(res.toObject()).to.be.deep.equal(oneTimeUser.toObject());
    });

    it('failed, fake _id', async() => {
      try{
        await UserLogics.User.loadUser(mongoose.Types.ObjectId());
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_not_found');
        expect(e.options.code).to.be.equal(403);
      }
    });

  });

};
