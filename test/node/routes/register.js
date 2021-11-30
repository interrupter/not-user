
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
    const prepared = {
      username:   'req.body.username',
      email:       'req.body.email',
      password:   'req.body.password',
    };
    it('ok', async () => {
      let req = stubRequest({}),
        res = stubResponse({});
        notNode.Application = stubApp({
          ...modelsEnv,
          logics: {
            'not-user//User': {
              async register(params) {
                expect(params).to.deep.equal(prepared);
                return {registration:1};
              }
            }
          }
        });
      const result = await routes.register(req, res, (err) => {
        console.log(err);
        expect(false).to.be.ok;
      }, prepared);
      expect(result).to.be.deep.equal({registration:1});
    });

    
  });
};
