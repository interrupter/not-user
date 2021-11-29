
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
      let prepared = {
        some: 'data'
      },
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
              expect(params).to.be.deep.equal(prepared);
            }
          }
        }
      });
      stubModuleEnv(routes, modelsEnv);
      await routes.update(req, {}, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);

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
