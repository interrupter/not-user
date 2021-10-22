const {notRequestError} = require('not-error');

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
  describe('createNewUserDocument', function() {
    let savedDoc;

    before(function(done) {
      let userDocument = {
        email: 'test@mail.org',
        username: 'test_mail.org',
        password: 'test_mail.org',
        emailConfirmed: true,
        role: ['user'],
        active: true
      };
      notNode.Application = stubApp({
        ...modelsEnv
      });
      User.User.add(userDocument).then((doc) => {
        savedDoc = doc.toObject();
        done()
      }).catch(done);
    });

    it('ok', async () => {

      const user = await UserLogics.User.createNewUserDocument({
        username: 'someUsername',
        email: 'some@email.com',
        password: '123123123v123',
      });
      expect(user).to.be.ok;
      expect(typeof user.userID).to.be.equal("number");
    });

    it('exception, model validation exception', async () => {

      try{
        await UserLogics.User.createNewUserDocument({
          username: '',
          email: '',
          password: new Date(),
        });
      }catch(e){
        expect(e).to.instanceof(Error);
      }
    });

    it('exception, username and email are not unique exception', async () => {

      try{
        await UserLogics.User.createNewUserDocument({
          username: savedDoc.username,
          email: savedDoc.email,
          password: 'new Date()',
        });
      }catch(e){
        expect(e).to.instanceof(notRequestError);
        expect(e.getResult().errors).to.be.deep.equal({
           username: 'not-user:username_taken', email: 'not-user:email_taken'
        });
      }
    });

  });
};
