module.exports = {
	ui:{
		component: 'UISwitch',
		label: 'not-user:field_emailConfirmed_label'
	},
	model:{
		type: Boolean,
		searchable: true,
		required: true,
		default: false,
		validate: [{
			validator(val) {
				return (val === true) || (val === false);
			},
			message: 'active_state_value_is_not_valid'
		}],
		safe: {
			update: ['@owner', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	}
};
