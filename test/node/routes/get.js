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
  describe('routes/user/get', function() {

    it('ok', async () => {
      const req = stubRequest({}),
        res = stubResponse({}),
        prepared = {some: 'data'};
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//User': {
            async get(params) {
              expect(params).to.be.deep.equal(prepared);
            }
          }
        }
      });
      await routes.get(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);
    });

  });

  describe('routes/user/_get', function() {

    it('ok', async () => {
      const
        prepared = {
          some: 'data'
        },
        req = stubRequest({}),
        res = stubResponse({});
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//User': {
            async get(params) {
              expect(params).to.be.deep.equal(prepared);
            }
          }
        }
      });
      await routes._get(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);
    });

  });

};
