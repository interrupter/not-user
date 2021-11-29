const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Form = new (require('../forms/_newUserData'))();

module.exports = {
	model:{
		type: Schema.Types.Mixed,
		required: true,
		validate: [{
			async validator(val) {
				await Form.run(val);
			},
			message: 'newUserData_data_is_not_valid'
		}]
	}
};
