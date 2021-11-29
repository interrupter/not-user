const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = [
	'activeUser',
	['data', {required: true}, 'newUserData'],
	'ip'
];
const FORM_NAME = `${MODULE_NAME}:CreateForm`;

/**
	*
	**/
module.exports = class CreateForm extends Form{
	constructor(){
		super({FIELDS, FORM_NAME});
	}

	/**
	* Extracts data
	* @param {ExpressRequest} req expressjs request object
	* @return {Object}        forma data
	**/
	extract(req){
		const ip = getIP(req);
		const data = {
			username: 	req.body.username,
			email: 			req.body.email,
			password: 	req.body.password,
			role: 			req.body.role,
			tel: 				req.body.tel,
			country: 		req.body.country,
			active: 		req.body.active,
			ip
		};
		return {
			activeUser: req.user,
			data,
			ip
		};
	}
};
