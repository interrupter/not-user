const {DEFAULT_HASH_ALGO} = require('../const');
//хэш пароля

module.exports = {
	model:{
		type: String,
		required: true,
		validate: [{
			validator: 'isHash',
			arguments: [DEFAULT_HASH_ALGO],
			message: 'hashedPassword_is_not_valid'
		}]
	}
};
