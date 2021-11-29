const {MODULE_NAME} = require('../const');

//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = ['code', 'ip'];
const FORM_NAME = `${MODULE_NAME}:ResetPasswordForm`;

/**
	*
	**/
module.exports = class ResetPasswordForm extends Form{
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
			code: req.query.code,
			ip: getIP(req)
		};
	}
};
