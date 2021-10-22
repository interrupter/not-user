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

  function stubUser(isRoot, role){
    return {
      _id: mongoose.Types.ObjectId(),
      role: [role],
      isRoot(){
        return isRoot;
      }
    }
  }

  describe('checkUserSupremacy', function() {

    it('ok', async () => {
      try{
        notNode.Application = stubApp({
          ...modelsEnv,
          logics: {
            'not-user//Auth': {
              userHaveSupremacy(){
                return true;
              }
            }
          }
        });
        UserLogics.User.checkUserSupremacy({
          activeUser: stubUser(true, ['root']),
          targetUser: stubUser(false, ['guest']),
        });
      }catch(e){
        expect(e).to.be.false;
      }
    });

    it('pass, same _ids', async () => {
      try{
        notNode.Application = stubApp({
          ...modelsEnv,
          logics: {
            'not-user//Auth': {
              userHaveSupremacy(){
                return true;
              }
            }
          }
        });
        const user = stubUser(false, ['admin']);
        await UserLogics.User.checkUserSupremacy({
          activeUser: user,
          targetUser: user,
        });
      }catch(e){
        expect(e).to.be.false;
      }
    });

    it('pass, role based supremacy', async () => {
      try{
        notNode.Application = stubApp({
          ...modelsEnv,
          logics: {
            'not-user//Auth': {
              userHaveSupremacy(){
                return true;
              }
            }
          }
        });
        await UserLogics.User.checkUserSupremacy({
          activeUser: stubUser(false, ['admin']),
          targetUser: stubUser(false, ['client']),
        });
      }catch(e){
        expect(e).to.be.false;
      }
    });

    it('exception, role based supremacy', async () => {
      try{
        notNode.Application = stubApp({
          ...modelsEnv,
          logics: {
            'not-user//Auth': {
              userHaveSupremacy(){
                return false;
              }
            }
          }
        });
        await UserLogics.User.checkUserSupremacy({
          activeUser: stubUser(false, ['client']),
          targetUser: stubUser(false, ['admin']),
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:insufficient_level_of_privilegies');
        expect(e.options.code).to.be.equal(405);
      }
    });


  });

};
