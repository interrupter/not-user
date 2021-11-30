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
  describe('routes/user/changePassword', function() {
    const oldPass = 'old_pass';
    const newPass = 'new_pass';
    it('ok', async () => {
      let prepared = {
        some: 'data'
      };
      let res = stubResponse({}),
        req = stubRequest({
          user:{
            info: '101'
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async changePassword(params){
              expect(params).to.be.deep.equal({
                user: {info: '101'},
                ...prepared
              });
            }
          }
        }
      });
      await routes.changePassword(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      }, prepared);
    });

  
  });
}
