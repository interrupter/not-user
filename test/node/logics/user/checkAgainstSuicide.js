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

  describe('checkAgainstSuicide', function() {

    it('ok', async () => {
      UserLogics.User.checkAgainstSuicide({
        activeUserId: mongoose.Types.ObjectId(),
        targetUserId: mongoose.Types.ObjectId(),
      });
    });

    it('failed, same _ids', async () => {
      try{
        const id = mongoose.Types.ObjectId();
        await UserLogics.User.checkAgainstSuicide({
          activeUserId: id,
          targetUserId: id,
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_cant_delete_his_own_account');
        expect(e.options.code).to.be.equal(403);
      }
    });

  });

};
