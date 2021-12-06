const {MODULE_NAME} = require('../const');

//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = ['email', 'password', 'ip'];
const FORM_NAME = `${MODULE_NAME}:LoginForm`;

/**
	*
	**/
module.exports = class LoginForm extends Form{
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
      password: req.body.password,
      ip: getIP(req)
    };
  }
};
