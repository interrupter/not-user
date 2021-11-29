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
}) => {
  describe('routes/user/status', function() {

    it('ok', async () => {
      const req = stubRequest({}),
        res = stubResponse({
          json() {
            expect(this._status).to.be.equal(200);
          }
        });
      await routes.status(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });
    });

    it('exception', async () => {
      const req = stubRequest({}),
        res = stubResponse({
          json() {
            throw new Error('Some error');
          }
        });
      await routes.status(req, res, (err) => {
        expect(err).to.be.instanceof(Error);
      });
    });

  });

};
