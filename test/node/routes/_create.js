
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

  const newUser = {
    username: 'new_one',
    email: 			'req.body.email',
    password: 	'req.body.password',
    role: 			'req.body.role',
    tel: 				'req.body.tel',
    country: 		'req.body.country',
    active: false
  }

  describe('routes/user/_create', function()  {
    it('ok', async () => {
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
          body:newUser
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics: {
          'not-user//User': {
            async createUser(params) {
              expect(params).to.have.keys(['activeUser','data', 'ip']);
              expect(params.activeUser).to.be.deep.equal(testUser);
              expect(params.data).to.be.deep.equal({
                ...newUser,
                ip: '127.0.0.1'
              });
              return {status: 'ok'};
            }
          }
        }
      });
      stubModuleEnv(routes, modelsEnv);
      await routes._create(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });

    });

    it('exception', async () => {
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
            async createUser() {
              throw new Error('Some error!');
            }
          }
        }
      });
      await routes._create(req, res, (err) => {
        expect(err).to.be.instanceof(Error);
      });
    });
  });

};
