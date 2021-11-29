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
  describe('routes/user/login', function() {

    it('ok', async () => {
      const req = stubRequest({}),
        res = stubResponse({}),
        prepared = {some: 'data'},
        user = {_id: '9832y409v81275081'};
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//Auth': {
              async login(params) {
                expect(params).to.be.deep.equal(prepared);
                return user;
              }
            }
          }
        });
      stubModuleEnv(routes, modelsEnv);
      const result = await routes.login(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);
      expect(result).to.be.deep.equal(user);
    });

    it('exception', async () => {
      const req = stubRequest({}),
        res = stubResponse({
          json() {
            expect(true).to.be.ok;
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//Auth': {
              async login() {
                throw new Error('Some erro');
              }
            }
          }
        });
      stubModuleEnv(routes, modelsEnv);
      await routes.login(req, res, (err) => {
        expect(err).to.be.instanceof(Error);
      });
    });

  });

};
