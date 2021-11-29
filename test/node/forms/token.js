const {
  notRequestError
} = require('not-error');

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
  modelsEnv
}) => {
  const testUser = {
    username: 'test',
    email: 'test@mail.com',
    emailConfirmed: true,
    created: Date.now,
    role: 'root',
    active: true,
    country: 'ru'
  };

  describe('routes/user/token', () => {
    it('token - exception throwed', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//Auth': {
            async token() {
              throw new Error('Error');
            }
          }
        }
      });
      let res = stubResponse({}),
        req = stubRequest({});
      await routes.token(req, res, (err) => {
        expect(err).to.be.instanceof(Error);
      });
    });

    it('token - ok; params set, but not user', async () => {
      config.set('modules:user:secret', '');
      config.set('modules:user:tokenTTL', 1000);
      let res = stubResponse({
          json(result) {
            expect(result.token).to.be.ok;
            expect(this._status).to.be.equal(200);
          }
        }),
        req = stubRequest({
          user: testUser
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//Auth': {
            async token(params) {
              expect(params).to.have.keys(['secret', 'tokenTTL', 'ip']);
              expect(Object.keys(params).length).to.be.equal(3);
              expect(params.secret).to.be.equal('');
              expect(params.tokenTTL).to.be.equal(1000);
              expect(params.user).to.be.undefined;
              return {
                status: 'ok',
                token: '123123'
              };
            }
          }
        }
      });

      stubModuleEnv(routes, modelsEnv);
      await routes.token(req, res, (err) => {
        expect(false).to.be.ok;
      });
    });

    it('token - ok; all params set', async () => {
      config.set('modules:user:secret', 'testsecret');
      config.set('modules:user:tokenTTL', undefined);
      let res = stubResponse({
          json(result) {
            expect(result.token).to.be.ok;
            expect(this._status).to.be.equal(200);
          }
        }),
        req = stubRequest({
          session: {
            user: '123123'
          },
          user: testUser
        });

      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//Auth': {
            async token(params) {
              expect(params.secret).to.be.equal('testsecret');
              expect(params.tokenTTL).to.be.undefined;
              expect(params.user).to.be.ok;
              expect(params.user.username).to.be.equal('test');
              return {
                status: 'ok',
                token: '123123'
              };
            }
          }
        }
      });
      stubModuleEnv(routes, modelsEnv);
      await routes.token(req, res, (err) => {
        expect(false).to.be.ok;
      });
    });
  });

};
