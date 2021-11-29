module.exports = {
	model:{
		type: String,
		required: false,
		validate: [{
			validator: 'isIP',
			message: 'ip_address_is_not_valid'
		}],
		safe: {
			update: ['@system'],
			read: ['@owner', 'root', 'admin']
		}
	}
};
