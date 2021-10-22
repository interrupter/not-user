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
  describe('login', function() {
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

    it('ok', async () => {
      const result = await AuthLogics.Auth.login({
        password: 'test_mail.org',
        email: 'test@mail.org',
        ip: '127.0.0.1'
      });
      expect(result).to.be.ok;
      expect(result._id).to.be.ok;
      expect(result.ip).to.be.equal('127.0.0.1');
    });

    it('empty email field', async () => {
      try {
        await AuthLogics.Auth.login({
          email: '',
          password: 'test_mail.org',
          ip: '127.0.0.1'
        });
      } catch (e) {
        expect(e).to.be.instanceof(notValidationError);
        expect(e.message).to.be.equal('not-user:email_not_valid');
        expect(e.options.fields).to.be.deep.equal({
          email: ['not-user:email_not_valid']
        });
      }
    });

    it('empty password field', async () => {
      try {
        await AuthLogics.Auth.login({
          password: '',
          email: 'test@mail.org',
          ip: '127.0.0.1'
        });
      } catch (e) {
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:password_length_not_valid');
        expect(e.options.errors).to.be.deep.equal({
          password: ['not-user:password_length_not_valid']
        });
      }
    });


    it('wrong email field, user not found', async () => {
      try {
        await AuthLogics.Auth.login({
          password: 'test_mail.org',
          email: 'test@mailasdfasdf.org',
          ip: '127.0.0.1'
        });
      } catch (e) {
        expect(e).to.be.instanceof(notError);
        expect(e.message).to.be.equal('not-user:user_not_found');
      }
    });
  });

};
