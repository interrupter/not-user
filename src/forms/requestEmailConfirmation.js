const _getValidatorEnvGetter = require('../validationEnv.js');
const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = [
  ['email', 'not-user//email'],
  ['ip', 'not-user//ip']
];
const FORM_NAME = `${MODULE_NAME}:RequestEmailConfirmationForm`;

/**
	*
	**/
module.exports = class RequestEmailConfirmationForm extends Form{
  constructor({app}){
    super({FIELDS, FORM_NAME, app});
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

  getValidatorEnvGetter(){
    return _getValidatorEnvGetter;
  }
};
