
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
})=>{
  describe('routes/user/register', function() {
    const bodyInput = {
      username:   'req.body.username',
      email:       'req.body.email',
      password:   'req.body.password',
    };
    it('ok', async () => {
      let req = stubRequest({
        body: bodyInput
      }),
        res = stubResponse({
          json(result){
            expect(this._status).to.be.equal(200);
            expect(result.status).to.be.equal('ok');
          }
        });
        notNode.Application = stubApp({
          ...modelsEnv,
          logics: {
            'not-user//User': {
              async register(params) {
                expect(params).to.have.keys(['username', 'email', 'password', 'ip']);
                expect(Object.keys(params).length).to.be.equal(4);
                expect(params.username).to.be.equal(bodyInput.username);
                expect(params.email).to.be.equal(bodyInput.email);
                expect(params.password).to.be.equal(bodyInput.password);
                return {
                  status: 'ok'
                };
              }
            }
          }
        });
      await routes.register(req, res, (err) => {
        console.log(err);
        expect(false).to.be.ok;
      });
    });

    it('exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({
          body: {
            username: 'usernameTest',
            email: 'register@mail.org',
            password: 'register_mail.org',
          }
        });
      notNode.Application = stubApp({
        logics: {
          'not-user//User': {
            async register(){
              throw new Error('some error');
            }
          }
        }
      });
      await routes.register(req, res, (err) => {
        expect(err).to.be.instanceof(Error);
      });
    });
  });
};
