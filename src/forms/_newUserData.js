const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//form
const FIELDS = [
	'username',
	'email',
	'password',
	'role',
	'tel',
	'country',
	'active',
	'ip'
];
const FORM_NAME = `${MODULE_NAME}:NewUserForm`;

/**
	*
	**/
module.exports = class NewUserForm extends Form{
	constructor(){
		super({FIELDS, FORM_NAME});
	}

	/**
	* doens't Extract data bc final object passed
	* @param {Object} data object
	* @return {Object}        forma data
	**/
	extract(data){
		return data;
	}
};
