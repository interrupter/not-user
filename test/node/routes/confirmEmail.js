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
  describe('routes/user/confirmEmail', function() {
    const url = '/login';
    it('ok', async () => {
      let res = stubResponse({}),
        req = stubRequest({}),
        prepared = {code: 'some_code'};
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//User':{
            async confirmEmail(code){
              expect(code).to.be.equal(prepared.code);
            }
          }
        }
      });
      await routes.confirmEmail(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);
    });

    it('exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({});
      await routes.confirmEmail(req, res, (err) => {
        expect(err).to.instanceof(Error);
      });
    });
  });
}
