
module.exports = ({
    routes,
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
  describe('routes/user/loginByEmail', function() {
    const url = '/';
    it('ok', async () => {
      let res = stubResponse({
          redirect(path) {
            expect(path).to.be.equal(url);
          }
        }),
        req = stubRequest({
          query: {
            code: 'oneTimePasses[0].code'
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async loginByCode({code, ip}){
              expect(code).to.be.equal('oneTimePasses[0].code');
              expect(ip).to.be.equal('127.0.0.1');
              return {
                _id: '123123123',
                role: 'role'
              };
            }
          }
        }
      });
      await routes.loginByCode(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });
    });

    it('exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({});
      await routes.loginByCode(req, res, (err) => {
        expect(err).to.instanceof(Error);
      });
    });
  });

};
