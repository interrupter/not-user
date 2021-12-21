const notNode = require('not-node');
const {notValidationError} = require('not-error');
const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = [
  ['username', 'not-user//username'],
  ['email', 'not-user//email'],
  ['password', 'not-user//password'],
  ['passwordRepeat', 'not-user//password'],
  ['role', 'not-user//role'],
  ['telephone', 'not-user//telephone'],
  ['country', 'not-user//country'],
  ['active', 'not-user//active'],
  ['ip', 'not-user//ip']
];

const FORM_NAME = `${MODULE_NAME}:CreateForm`;

//form validators
const validateUsernameAvailability = require('./validators/validateUsernameAvailability');
const validatePasswords = require('./validators/validatePasswords');

/**
	*
	**/
module.exports = class CreateForm extends Form{

  constructor({app}){
    super({FIELDS, FORM_NAME, app});
  }

  /**
	* Extracts data
	* @param {ExpressRequest} req expressjs request object
	* @return {Object}        forma data
	**/
  extract(req){
    const ip = getIP(req);
    return {
      username: 			req.body.username,
      email: 					req.body.email,
      password: 			req.body.password,
      passwordRepeat:	req.body.passwordRepeat,
      telephone: 			req.body.telephone,
      role: 					req.body.role,
      country: 				req.body.country,
      active: 				req.body.active,
      ip
    };
  }

  getFormValidationRules(){
    return [
      validateUsernameAvailability,
      validatePasswords,
    ];
  }

};
