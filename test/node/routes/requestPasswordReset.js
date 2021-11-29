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
}) => {
  describe('routes/user/requestPasswordReset', function() {
    const url = '/resetPasswordSuccess';
    const mail = 'some@mail.it';
    it('ok', async () => {
      let res = stubResponse({}),
        req = stubRequest({}),
        prepared = {some : 'data'};
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async requestPasswordReset(params){
              expect(params).to.be.deep.equal(prepared);
            }
          }
        }
      });
      await routes.requestPasswordReset(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);
    });

    it('exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({});
      await routes.requestPasswordReset(req, res, (err) => {
        expect(err).to.instanceof(Error);
      });
    });
  });
}
