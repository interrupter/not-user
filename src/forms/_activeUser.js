const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//form
const FIELDS = [
	'username',
	'email',
	'emailConfirmed',
	'created',
	'role',
	'active',
	'country'
];
const FORM_NAME = `${MODULE_NAME}:ActiveUserForm`;

/**
	*
	**/
module.exports = class ActiveUserForm extends Form{
	constructor(){
		super({FIELDS, FORM_NAME});
	}

	/**
	* doesn't Extract data bc final object passed
	* @param {Object} data object
	* @return {Object}        forma data
	**/
	extract(data){
		return data;
	}
};
