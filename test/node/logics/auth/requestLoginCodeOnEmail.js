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
})=>{
  describe('requestLoginCodeOnEmail', function() {
    before(function(done) {
      let userDocument = {
        email: 'test@mail.org',
        username: 'test_mail.org',
        password: 'test_mail.org',
        emailConfirmed: true,
        role: ['user'],
        active: true
      };
      User.User.add(userDocument).then(() => done()).catch(done);
      notNode.Application = stubApp({
        ...modelsEnv
      });
    });

    it('failed, misformed email', async() => {
      try{
        await AuthLogics.Auth.requestLoginCodeOnEmail({email: 'asdfsadf.ru'});
      }catch(e){
        expect(e).to.be.instanceof(notValidationError);
        expect(e.message).to.be.equal('not-user:email_not_valid');
        expect(e.options.fields).to.be.deep.equal({
          email: ['not-user:email_not_valid']
        });
      }
    });

    it('failed, user not found', async() => {
      try{
        await AuthLogics.Auth.requestLoginCodeOnEmail({email: 'asdfs@adf.ru'});
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_not_found');
        expect(e.options.code).to.be.equal(403);
      }
    });

    it('failed, UserMailer.sendOneTimeLoginCode throws', async() => {
      try{
        notNode.Application = stubApp({
          ...modelsEnv,
          logics:{
            'not-user//UserMailer': {
              async sendOneTimeLoginCode({user}){
                expect(user).to.be.ok;
                throw new Error('Some mailer error');
              }
            }
          }
        });
        await AuthLogics.Auth.requestLoginCodeOnEmail({email: 'test@mail.org'});
      }catch(e){
        expect(e).to.be.instanceof(Error);
        expect(e.message).to.be.equal('Some mailer error');
      }
    });


    it('requestLoginCodeOnEmail - ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//UserMailer': {
            async sendOneTimeLoginCode(user){
              expect(user).to.be.ok;
            }
          }
        }
      });
      let result = await AuthLogics.Auth.requestLoginCodeOnEmail({email: 'test@mail.org'});
      expect(result).to.be.undefined;
    });
  });

};
