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
  describe('routes/user/resetPassword', function() {
    const url = '/resetPasswordSuccess';
    const someCode = 'some@mail.it';
    it('ok', async () => {
      let res = stubResponse({
          json(result) {
            expect(result).to.be.ok;
            expect(this._status).to.be.equal(200);
          }
        }),
        req = stubRequest({
          query: {
            code: someCode
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async resetPassword({code}){
              expect(code).to.be.equal(someCode);
            }
          }
        }
      });
      await routes.resetPassword(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });
    });

    it('exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({});
      await routes.resetPassword(req, res, (err) => {
        expect(err).to.instanceof(Error);
      });
    });
  });
}
