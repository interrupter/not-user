const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//not-node
const	getIP = require('not-node').Auth.getIP;
//form
const FIELDS = [
  ['targetUserId', {required: true}, 'not-node//userId'],
  ['activeUserId', {required: true}, 'not-node//userId'],
  ['activeUser', 'not-node//requiredObject'],
  ['ip', 'not-user//ip']
];
const FORM_NAME = `${MODULE_NAME}:GetForm`;

/**
	*
	**/
module.exports = class GetForm extends Form{
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
      activeUserId: req.user._id,
      ip: getIP(req)
    };
  }
};
