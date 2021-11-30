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
  describe('routes/user/profile', function() {
    it('ok', async () => {
      const req = stubRequest({
          params: {
            _id: '54321'
          },
          session: {
            user: '12345'
          },
          user: {
            '_id': '12345',
            username: 'vasya'
          }
        }),
        res = stubResponse({
          json(result) {
            expect(this._status).to.be.equal(200);
            expect(result.status).to.be.equal('ok');
            expect(result.result).to.be.deep.equal({_id: '123123123',
            username: 'username',
            role: 'userRole'});
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//User': {
            async profile(params) {
              expect(params).to.have.keys(['activeUser', 'ip']);
              expect(params.activeUser).to.be.deep.equal({
                '_id': '12345',
                username: 'vasya'
              });
              expect(params.ip).to.be.deep.equal('127.0.0.1');
              return {
                status: 'ok',
                result: {
                  _id: '123123123',
                  username: 'username',
                  role: 'userRole'
                }
              };
            }
          }
        }
      });
      await routes.profile(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });
    });

  });

};
