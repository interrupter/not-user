
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
      let res = stubResponse({}),
        req = stubRequest({}),
        prepared = {some: 'data'};
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async loginByCode(params){
              expect(params).to.be.deep.equal(prepared);
              return {
                _id: '123123123',
                role: 'role'
              };
            }
          }
        }
      });
      const result = await routes.loginByCode(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);
      expect(result).to.be.ok;
      expect(result.__redirect__).to.be.equal(url);
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
