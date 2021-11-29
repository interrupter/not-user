
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
})=>{
  const testUser = {
    username: 'test',
    email: 'test@mail.com',
    emailConfirmed: true,
    created: Date.now,
    role: 'root',
    active: true,
    country: 'ru'
  };

  describe('routes/user/update', function()  {
    it('update - ok', async () => {
      let res = stubResponse({
          json(result) {
            expect(result.error).to.be.undefined;
            expect(this._status).to.be.equal(200);
          }
        }),
        req = stubRequest({
          params: {
            _id: '_id_value'
          },
          user: testUser,
          body:{
            username: 'new_one',
            active: false
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//User': {
            async update(params) {
              expect(params.targetUserId).to.be.equal('_id_value');
              expect(params.activeUser).to.be.deep.equal(testUser);
              expect(params.data).to.be.deep.equal({
                username: 'new_one',
                active: false
              });
              return {status: 'ok'};
            }
          }
        }
      });
      stubModuleEnv(routes, modelsEnv);
      await routes.update(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });

    });

    it('update - exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({
          body: {
            email: 'register@mail.org'
          }
        });
      stubModuleEnv(routes, modelsEnv);
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//User': {
            async update() {
              throw new Error('Some error!');
            }
          }
        }
      });
      await routes.update(req, res, (err) => {
        expect(err).to.be.instanceof(Error);
      });
    });
  });
};
