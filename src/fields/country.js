module.exports = {
	model:{
		type: String,
		required: false,
		searchable: true,
		default: 'ru',
		validate: [{
			validator(val) {
				return val === 'ru';
			},
			message: 'selected_user_language_is_not_valid'
		}],
		safe: {
			update: ['@system', '@owner', 'root', 'admin'],
			read: ['*']
		}
	}
};
