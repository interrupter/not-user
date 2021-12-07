const {
  DEFAULT_ROLES_LIST,
  EXTRA_ROLES_LIST
} = require('../../const');

module.exports = [{
  validator(val) {
    return (val.length !== 0);
  },
  message: 'user_role_should_be_declared'
},
{
  validator(val) {
    return (val.length < 7);
  },
  message: 'user_role_too_many'
},
{
  validator(val, {config}) {
    const ROLES_PRIMARY = config.get('roles.primary',DEFAULT_ROLES_LIST);
    let count = 0;
    val.forEach((role) => {
      const roleName = (typeof role === 'string')?role:role.id;
      if (ROLES_PRIMARY.includes(roleName)) {
        count++;
      }
    });
    return (count === 1);
  },
  message: 'user_role_should_have_one_primary'
},
{
  validator(val, {config}) {
    const ROLES_PRIMARY = config.get('roles.primary', DEFAULT_ROLES_LIST);
    const ROLES_SECONDARY = config.get('roles.secondary',EXTRA_ROLES_LIST);
    let extraIsInvalid = false;
    val.forEach((role) => {
      const roleName = (typeof role === 'string')?role:role.id;
      if (!ROLES_PRIMARY.includes(roleName) && !ROLES_SECONDARY.includes(roleName)) {
        extraIsInvalid = true;
      }
    });
    return !extraIsInvalid;
  },
  message: 'user_role_secondary_is_not_exists'
}
];
