
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
    User
})=>{
  describe('routes/user/requestLoginCodeOnEmail', function() {
    it('ok', async () => {
      let res = stubResponse({}),
        req = stubRequest({}),
        prepared = {data: 'some'};
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async requestLoginCodeOnEmail(params){
              expect(params).to.be.deep.equal(prepared);
            }
          }
        }
      });
      await routes.requestLoginCodeOnEmail(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      },prepared);
    });

    it('exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({});
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async requestLoginCodeOnEmail(){
              throw new Error('New');
            }
          }
        }
      });
      await routes.requestLoginCodeOnEmail(req, res, (err) => {
        expect(err).to.instanceof(Error);
      });
    });
  });

};
