module.exports = {
  ui:{
    component: 'UIRole',
    label: 'not-user:field_role_label',
    variantsSource: 'role'
  },
  model: {
    type: [String],
    required: true,
    searchable: true,
    default: ['user'],
    validate: [],
    safe: {
      update: ['root', 'admin'],
      read: ['@owner', 'root', 'admin']
    }
  }
};
