
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
    it('_steal - ok', async () => {
      const result = await routes._steal();
      expect(result).to.be.deep.equal({});
    });
  });

};
