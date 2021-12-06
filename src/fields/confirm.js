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
  }
};
