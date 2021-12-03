module.exports = {
	model:{
		type: String,
		required: true,
		validate: [{
			validator: 'isLength',
			arguments: [6, 256],
			message: 'not-user:password_length_not_valid'
		}]
	},
	ui:{
		component: 'UIPassword',
		label: 'not-user:field_password_label'
	},
};