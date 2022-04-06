const _getValidatorEnvGetter = require('../validationEnv.js');
const {MODULE_NAME} = require('../const');

//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
const requiredObject = 'not-node//requiredObject';
//form
const FIELDS = [
  ['targetUserId', {required: true}, 'userId'],
  ['activeUser', requiredObject],
  ['data', requiredObject],
  ['user', requiredObject],
  ['ip', 'not-user//ip']
];
const FORM_NAME = `${MODULE_NAME}:UpdateForm`;

/**
	*
	**/
module.exports = class UpdateForm extends Form{
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
      targetUserId: req.params._id,
      activeUser: req.user,
      data: req.body,
      user: req.user,
      ip: getIP(req)
    };
  }

  getValidatorEnvGetter(){
    return _getValidatorEnvGetter;
  }
};
