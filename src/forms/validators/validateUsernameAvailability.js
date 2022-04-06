const notNode = require('not-node');
const {notValidationError} = require('not-error');

module.exports = async ({username}/*, validationEnvs*/) => {
  const model = notNode.Application.getModel('not-user//User');
  const result = await model.getByFieldValueWithoutVersioningRespect('username', username);
  if (result){
    throw new notValidationError(
      'not-user:username_used_by_some_user',
      {
        username: ['not-user:username_used_by_some_user']
      },
      undefined,
      {
        username
      }
    );
  }
};
