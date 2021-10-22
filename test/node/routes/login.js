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
      const req = stubRequest({
          body: {
            email: 'email',
            password: 'password',
          }
        }),
        res = stubResponse({
          json(result) {
            expect(result.status).to.be.equal('ok');
            expect(result.result).to.be.deep.equal({
              _id: '123123123',
              username: 'username',
              role: 'userRole'
            });
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//Auth': {
              async login(params) {
                expect(params.email).to.be.equal('email');
                expect(params.password).to.be.equal('password');
                expect(params.ip).to.be.deep.equal('127.0.0.1');
                return {
                  _id: '123123123',
                  username: 'username',
                  role: 'userRole'
                };
              }
            }
          }
        });
      stubModuleEnv(routes, modelsEnv);
      await routes.login(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });
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
