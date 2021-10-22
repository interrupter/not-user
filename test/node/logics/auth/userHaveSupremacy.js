const {
  notError,
  notValidationError,
  notRequestError
} = require('not-error');

module.exports = ({
  UserLogics,
  AuthLogics,
  MailerLogics,
  InitLogics,
    config,
    JWT,
    notNode,
    expect,
    stubApp,
    stubResponse,
    stubRequest,
    stubModuleEnv,
    modelsEnv,
    User,
    OneTimeCode
})=>{
  describe('userHaveSupremacy', function() {
    before(()=>{
      notNode.Application = stubApp({
        ...modelsEnv
      });
    });

    it('ok. no role superiority list in options; active - root, target - guest', async() => {
      config.set('roles:priority', undefined);
      const activeUser = {role: ['root']}, targetUser = {role: ['guest']};
      const result = AuthLogics.Auth.userHaveSupremacy(activeUser, targetUser);
      expect(result).to.be.ok;
    });

    it('ok. no role superiority list in options; active - admin, target - user', async() => {
      config.set('roles:priority', undefined);
      const activeUser = {role: ['admin']}, targetUser = {role: ['user']};
      const result = AuthLogics.Auth.userHaveSupremacy(activeUser, targetUser);
      expect(result).to.be.ok;
    });

    it('not ok. no role superiority list in options; active - user, target - user', async() => {
      config.set('roles:priority', undefined);
      const activeUser = {role: ['user']}, targetUser = {role: ['user']};
      const result = AuthLogics.Auth.userHaveSupremacy(activeUser, targetUser);
      expect(result).to.be.not.ok;
    });

    it('not ok. no role superiority list in options; active - admin, target - admin', async() => {
      config.set('roles:priority', undefined);
      const activeUser = {role: ['admin']}, targetUser = {role: ['admin']};
      const result = AuthLogics.Auth.userHaveSupremacy(activeUser, targetUser);
      expect(result).to.be.not.ok;
    });

    it('not ok. no role superiority list in options; active - user, target - root', async() => {
      config.set('roles:priority', undefined);
      const activeUser = {role: ['user']}, targetUser = {role: ['root']};
      const result = AuthLogics.Auth.userHaveSupremacy(activeUser, targetUser);
      expect(result).to.be.not.ok;
    });

    it('not ok. no role superiority list in options; active - user, target - admin', async() => {
      config.set('roles:priority', undefined);
      const activeUser = {role: ['user']}, targetUser = {role: ['admin']};
      const result = AuthLogics.Auth.userHaveSupremacy(activeUser, targetUser);
      expect(result).to.be.not.ok;
    });

    it('not ok. no role superiority list in options; active - root, target - root', async() => {
      config.set('roles:priority', undefined);
      const activeUser = {role: ['root']}, targetUser = {role: ['root']};
      const result = AuthLogics.Auth.userHaveSupremacy(activeUser, targetUser);
      expect(result).to.be.not.ok;
    });

  });

};
