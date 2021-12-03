const {
  DEFAULT_ROLES_LIST,
  EXTRA_ROLES_LIST
} = require('../const');
const {
  MODULE_NAME
} = require('../const');
const config = require('not-config').readerForModule('user');

const {
  error
} = require('not-log')(module, 'Validation');

module.exports = {
  model: {
    type: [String],
    required: true,
    searchable: true,
    default: ['user'],
    validate: [{
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
        validator(val) {
					const ROLES_PRIMARY = config.get('roles.primary') || DEFAULT_ROLES_LIST;
					let count = 0;
          val.forEach((role) => {
            if (ROLES_PRIMARY.includes(role)) {
              count++;
            }
          });
					return (count === 1);
        },
        message: 'user_role_should_have_one_primary'
      },
      {
        validator(val) {
          const ROLES_PRIMARY = config.get('roles.primary') || DEFAULT_ROLES_LIST;
          const ROLES_SECONDARY = config.get('roles.secondary') || EXTRA_ROLES_LIST;
					error(ROLES_SECONDARY);
          let extraIsInvalid = false;
          val.forEach((role) => {
            if (!ROLES_PRIMARY.includes(role) && !ROLES_SECONDARY.includes(role)) {
              extraIsInvalid = true;
            }
          });
          return !extraIsInvalid;
        },
        message: 'user_role_secondary_is_not_exists'
      }
    ],
    safe: {
      update: ['root', 'admin'],
      read: ['@owner', 'root', 'admin']
    }
  }
};
