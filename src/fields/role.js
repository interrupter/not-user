const {DEFAULT_ROLES_LIST, EXTRA_ROLES_LIST} = require('../const');

module.exports = {
	model:{
		type: [String],
		required: true,
		searchable: true,
		default: ['user'],
		validate: [{
			validator(val) {
				if (val.length === 0) {
					return false;
				}
				if (val.length > 6) {
					return false;
				}
				let count = 0;
				let extraIsInvalid = false;
				val.forEach((role) => {
					if (DEFAULT_ROLES_LIST.includes(role)) {
						count++;
					}else if(! EXTRA_ROLES_LIST.includes(role)){
						extraIsInvalid = true;
					}
				});
				if (count !== 1) {
					return false;
				}
				if(extraIsInvalid){
					return false;
				}
				return true;
			},
			message: 'user_role_is_not_valid'
		}],
		safe: {
			update: ['root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	}
};
