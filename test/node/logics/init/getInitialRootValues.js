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
}) => {
  describe('getInitialRootValues', function() {
    const root = {
      username: 'rootUserFromCOnfig',
      email: 'rootUserFromCOnfig@mail.local',
      password: 'rootUserFromCOnfig',
    };

    it('from config, no ENV', async () => {
      const result = InitLogics.Init.getInitialRootValues();
      expect(result).to.be.deep.equal(root);
    });

    it('nothing in config, ENV ', async () => {
      config.set('root', false);
      process.env.INIT_ROOT_USERNAME = root.username;
      process.env.INIT_ROOT_EMAIL = root.email;
      process.env.INIT_ROOT_PASSWORD = root.password;
      const result = InitLogics.Init.getInitialRootValues();
      expect(result).to.be.deep.equal(root);
    });

  });
};
