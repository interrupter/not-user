//статус пользователя, активен или нет

module.exports = {
	model:{
		type: Boolean,
		required: true,
		searchable: true,
		default: true,
		validate: [{
			validator(val) {
				return (val === true) || (val === false);
			},
			message: 'active_state_value_is_not_valid'
		}],
		safe: {
			update: ['@system', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	}
};
