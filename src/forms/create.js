const notNode = require('not-node');
const {notValidationError} = require('not-error');
const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
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
		return {
			username: 	req.body.username,
			email: 			req.body.email,
			password: 	req.body.password,
			role: 			req.body.role,
			tel: 				req.body.tel,
			country: 		req.body.country,
			active: 		req.body.active,
			ip
		};
	}

	async validate(data){
		await this.MODEL.validate(data, this.getFields());
		const model = notNode.Application.getModel('not-user//User');
		const result = await model.getByFieldValueWithoutVersioningRespect('username', data.username);
		if (result){
			throw new notValidationError(
        'not-user:username_used_by_some_user',
        {
          username: ['not-user:username_used_by_some_user']
        },
        undefined,
        {
          username: data.username
        }
      );
		}
		return true;
	}
};
