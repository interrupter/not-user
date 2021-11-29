module.exports = {
	ui:{
		component: 'UIEmail',
		label: 'not-user:field_email_label'
	},
	model:{
		type: String,
		unique: true,
		searchable: true,
		required: true,
		validate: [{
			validator: 'isEmail',
			message: 'email_is_not_valid'
		}],
		safe: {
			update: ['@owner', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	}
};
