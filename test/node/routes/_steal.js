
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
  describe('routes/user/_steal', function() {
    it('_steal - ok', (done) => {
      let res = {
          status(st) {
            this.status = st;
            return this;
          },
          json(result) {
            expect(result.error).to.be.undefined;
            expect(this.status).to.be.equal(200);
            done();
          }
        },
        req = {
          headers: {
            'x-forwarded-for': '127.0.0.1'
          },
          session: {
            save() {}
          },
          body: {
            email: 'register@mail.org'
          }
        };
      routes.getModel = () => {
        return User.User;
      };
      routes.getModelSchema = () => {
        return User.thisSchema;
      };
      routes._steal(req, res, (err) => {
        if (err) {
          done(err);
        } else {
          expect(false).to.be.ok;
          done();
        }
      });
    });
  });

};
