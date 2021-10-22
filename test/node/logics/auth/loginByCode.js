const {
  notError,
  notValidationError,
  notRequestError
} = require('not-error');
module.exports = ({
  OneTimeCodeLogics,
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
  describe('loginByCode', function() {
    let oneTimePasses = [],
      oneTimeUser = null;

    before(async () => {
      oneTimeUser = await ((User.User.add({
        email: 'oneTimeTester@email.com',
        username: 'oneTimeTester',
        emailConfirmed: false,
        password: 'oneTimeTester'
      })))
      const createCode = ()=>{
        return OneTimeCode.OneTimeCode.createCode({
          email: oneTimeUser.email,
          owner: oneTimeUser._id,
          action: 'loginByCode'
        });
      }
      oneTimePasses = await Promise.all([createCode(),createCode(),createCode()]);
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//OneTimeCode': OneTimeCodeLogics.OneTimeCode
        }
      });
    });

    it('ok', async () => {
      const result = await AuthLogics.Auth.loginByCode({code: oneTimePasses[0].code, ip: '127.0.0.1'});
      expect(result).to.be.ok;
      expect(result._id.toString()).to.be.equal(oneTimeUser._id.toString());
      expect(result.email).to.be.equal(oneTimeUser.email);
    });

    it('failed, used code', async () => {
      try{
        await AuthLogics.Auth.loginByCode({code: oneTimePasses[0].code, ip: '127.0.0.1'});
      }catch(e){
        expect(e).to.be.instanceof(notValidationError);
        expect(e.message).to.be.equal('not-user:one_time_code_not_found');
      }
    });

    it('failed, used password', async () => {
      try{
        await AuthLogics.Auth.loginByCode({code: oneTimePasses[1].code, ip: '127.0.0.1'});
      }catch(e){
        expect(e).to.be.instanceof(notValidationError);
        expect(e.message).to.be.equal('not-user:one_time_code_not_valid');
      }
    });

  });

};
