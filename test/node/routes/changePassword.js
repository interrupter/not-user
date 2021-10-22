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
      let res = stubResponse({
          json(result) {
            expect(result).to.be.ok;
            expect(this._status).to.be.equal(200);
          }
        }),
        req = stubRequest({
          body: {
            oldPassword: oldPass,
            newPassword:newPass
          },
          user: {
            _id: 'some_id',
            username: 'vasya'
          }
        });
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            async changePassword(params){
              expect(params).to.have.keys(['user', 'oldPass','newPass', 'ip']);
              expect(params.oldPass).to.be.equal(oldPass);
              expect(params.newPass).to.be.equal(newPass);
              expect(params.ip).to.be.equal('127.0.0.1');
              return {
                status: 'ok'
              };
            }
          }
        }
      });
      await routes.changePassword(req, res, (err) => {
        console.error(err);
        expect(false).to.be.ok;
      });
    });

    it('exception', async () => {
      let res = stubResponse({}),
        req = stubRequest({});
      await routes.changePassword(req, res, (err) => {
        expect(err).to.instanceof(Error);
      });
    });
  });
}
