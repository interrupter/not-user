const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = ['email', 'ip'];
const FORM_NAME = `${MODULE_NAME}:RequestLoginCodeOnEmailForm`;

/**
	*
	**/
module.exports = class RequestLoginCodeOnEmailForm extends Form{
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
			email: req.body.email,
			ip: getIP(req)
		};
	}
};
