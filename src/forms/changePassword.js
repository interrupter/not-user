const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = [
	['oldPass', {}, 'password'],
	['newPass', {}, 'password'],
	'ip'
];
const FORM_NAME = `${MODULE_NAME}:ChangePasswordForm`;

/**
	*
	**/
module.exports = class ChangePasswordForm extends Form{
	constructor(){
		super({FIELDS, FORM_NAME});
	}

	/**
	* Extracts data
	* @param {ExpressRequest} req expressjs request object
	* @return {Object}        forma data
	**/
	extract(req){
		return {
			oldPass: req.body.oldPassword,
			newPass: req.body.newPassword,
			ip: getIP(req)
		};
	}
};
