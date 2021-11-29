const validator = require('validator');

module.exports = {
	ui:{
		component: 'UITelephone',
		label: 'not-user:field_telephone_label'
	},
	model:{
		type: String,
		unique: false,
		searchable: true,
		required: false,
		validate: [{
			validator(val) {
				return validator.isMobilePhone(val.replace(/\D/g, ''));
			},
			message: 'telephone_value_is_not_valid'
		}],
		safe: {
			update: ['@owner', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	}
};
