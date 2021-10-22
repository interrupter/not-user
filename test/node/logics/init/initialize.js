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
  describe('initialize', function() {

    before(async()=>{
      await User.User.deleteMany({});
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//User':{
            async createRootUser(app, data){
              return
            }
          }
        }
      });
    });

    it('ok; no root -> created', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//User': UserLogics.User,
          'not-user//Auth': AuthLogics.Auth
        }
      });
      const result = await InitLogics.Init.initialize(notNode.Application);
      expect(result).to.be.ok;
      expect(result._id).to.be.ok;
      expect(result.email).to.be.equal('rootUserFromCOnfig@mail.local');
    });

    it('ok; root exists -> created', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//User': UserLogics.User,
          'not-user//Auth': AuthLogics.Auth
        }
      });
      const result = await InitLogics.Init.initialize(notNode.Application);
      expect(result).to.be.undefined;
    });

    it('failed; exception from User model ', async () => {
      notNode.Application = stubApp({
        models:{
          'not-user//User':{
            findOne: async ()=>{
              throw new Error('findOne');
            }
          }
        }
      });
      try{
        await InitLogics.Init.initialize(notNode.Application);
      }catch(e){
        expect(e).to.be.instanceof(Error);
        expect(e.message).to.be.instanceof('findOne');
      }
    });

  });

};
