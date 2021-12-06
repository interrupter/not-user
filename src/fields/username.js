module.exports = {
  ui:{
    component: 'UITextfield',
    label: 'not-user:field_username_label'
  },
  model:{
    type: String,
    unique: true,
    searchable: true,
    required: true,
    safe: {
      read: ['*']
    }
  }
};
