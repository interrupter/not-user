const validator = require('validator');

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
		validate: [{
			validator: 'isLength',
			arguments: [3, 60],
			message: 'username_length_is_not_valid'
		}, {
			validator(val) {
				return !validator.isEmail(val);
			},
			message: 'username_cant_be_email'
		}],
		safe: {
			read: ['*']
		}
	}
};
