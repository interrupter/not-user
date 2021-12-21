const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
  model:{
    type: Schema.Types.Mixed,
    required: false,
    searchable: true,
    safe: {
      update: ['@system', 'root', 'admin']
    }
  },
  ui:{
    component: 'UITextfield',
    label: 'not-user:field_confirm_label',
    placeholder: 'not-user:field_confirm_placeholder',
    readonly: true
  },
};
