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
    it('ok', async () => {
      let
        prepared = {
          some: 'data'
        },
        res = stubResponse({}),
        req = stubRequest({});
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async resetPassword(params){
              expect(params).to.be.deep.equal(prepared);
            }
          }
        }
      });
      const result = await routes.resetPassword(req, res, (err) => {
        expect(false).to.be.ok;
      },prepared);
      expect(result).to.be.ok;
      expect(result.__redirect__).to.be.deep.equal(url);
    });

    
  });
}
