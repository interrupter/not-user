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


  describe('validateSecretForToken', () => {
    it('ok', async () => {
      AuthLogics.Auth.validateSecretForToken({
        secret: '21358bu123n058970192387509128340',
        context: {}
      });
    });

    it('exception - null', async () => {
      try{
        AuthLogics.Auth.validateSecretForToken({
          secret: null,
          context: {}
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_token_secret_not_valid');
        expect(e.options.code).to.be.equal(500);
      }
    });

    it('exception - undefined', async () => {
      try{
        AuthLogics.Auth.validateSecretForToken({
          context: {}
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_token_secret_not_valid');
        expect(e.options.code).to.be.equal(500);
      }
    });

    it('exception - undefined', async () => {
      try{
        AuthLogics.Auth.validateSecretForToken({
          secret: '',
          context: {}
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_token_secret_not_valid');
        expect(e.options.code).to.be.equal(500);
      }
    });
  });

  describe('validateTTLForToken', () => {
    it('ok, 1', async () => {
      const res = AuthLogics.Auth.validateTTLForToken(1);
      expect(res).to.be.equal(1);
    });

    it('default used, 0', async () => {
      const res = AuthLogics.Auth.validateTTLForToken(0);
      expect(res).to.be.equal(AuthLogics.Auth.TOKEN_TTL);
    });

    it('default used, undefined', async () => {
      const res = AuthLogics.Auth.validateTTLForToken();
      expect(res).to.be.equal(AuthLogics.Auth.TOKEN_TTL);
    });
  });

  describe('token', () => {
    let oneTimeUser = null;
    before(async () => {
      oneTimeUser = await ((User.User.add({
        email: 'oneTimeTester@email.com',
        username: 'oneTimeTester',
        emailConfirmed: false,
        password: 'oneTimeTester'
      })));

      notNode.Application = stubApp({
        ...modelsEnv
      });
    });

    it('token - ok; user - set; secret - set; tokenTTL - set, > 0', async () => {
      const secret = '2314987t1298734291783482';
      const result = await AuthLogics.Auth.token({
        user: oneTimeUser,
        secret,
    		tokenTTL: 1000,
        ip: '127.0.0.1'
      });
      expect(result).to.be.ok;
      expect(result.token).to.be.ok;
    });

    it('token - failed; user - set; secret - not set; tokenTTL - set, >0', async () => {
      try{
        const secret = '';
        await AuthLogics.Auth.token({
          user: oneTimeUser,
          secret,
          tokenTTL: 1000,
          ip: '127.0.0.1'
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_token_secret_not_valid');
        expect(e.options.code).to.be.equal(500);
      }
    });

    it('token - ok; user - guest; secret - set; tokenTTL - undefined', async () => {
      const secret = '2314987t1298734291783482';
      const result = await AuthLogics.Auth.token({
        secret,
        ip: '127.0.0.1'
      });
      expect(result).to.be.ok;
      expect(result.token).to.be.ok;
    });
  });

};
