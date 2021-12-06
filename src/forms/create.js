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
  'passwordRepeat',
  'role',
  'telephone',
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

  async validateUsernameAvailability({username}){
    const model = notNode.Application.getModel('not-user//User');
    const result = await model.getByFieldValueWithoutVersioningRespect('username', username);
    if (result){
      throw new notValidationError(
        'not-user:username_used_by_some_user',
        {
          username: ['not-user:username_used_by_some_user']
        },
        undefined,
        {
          username
        }
      );
    }
  }

  validatePasswords({password, passwordRepeat, username}){
    if (password!== passwordRepeat){
      throw new notValidationError(
        'not-user:passwordRepeat_should_be_same_as_password',
        {
          passwordRepeat: ['not-user:passwordRepeat_should_be_same_as_password']
        },
        undefined,
        {
          username
        }
      );
    }
  }

  async validate(data){
    await this.MODEL.validate(data, this.getFields());
    this.validatePasswords(data);
    await this.validateUsernameAvailability(data);
    return true;
  }

};
