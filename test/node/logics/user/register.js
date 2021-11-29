
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
})=>{
  describe('register', function() {
    let data = {
      username: 'usernameTest',
      email: 'register@mail.org',
      password: 'register_mail.org',
    };

    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//UserMailer': {
            async sendConfirmationEmail(params){
              expect(params).to.have.keys(['user']);
              expect(params.user).to.be.ok;
            }
          }
        }
      });
      const result = await UserLogics.User.register(data);
      expect(result).to.be.undefined;
    });

    it('failed, exception throwned; user with this username and email exist', async() => {
      try{
        await UserLogics.User.register(data);
      }catch(e){
        expect(e).to.be.instanceof(Error);
      }
    });
  });
};
