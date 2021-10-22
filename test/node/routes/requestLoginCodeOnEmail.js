
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
      let res = stubResponse({
          json(result) {
            expect(result).to.be.ok;
            expect(this._status).to.be.equal(200);
          }
        }),
        req = stubRequest({
          body: {
            email: 'email@post.now'
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async requestLoginCodeOnEmail({email}){
              expect(email).to.be.equal('email@post.now');
              return {status: 'ok'}
            }
          }
        }
      });
      await routes.requestLoginCodeOnEmail(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });
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
