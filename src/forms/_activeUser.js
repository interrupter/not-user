const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//form
const FIELDS = [
  ['username', 'not-user//username'],
  ['email', 'not-user//email'],
  ['emailConfirmed', 'not-user//emailConfirmed'],
  ['created', 'not-user//created'],
  ['role', 'not-user//role'],
  ['active', 'not-user//active'],
  ['country', 'not-user//country']
];
const FORM_NAME = `${MODULE_NAME}:ActiveUserForm`;

/**
	*
	**/
module.exports = class ActiveUserForm extends Form{
  constructor({app}){
    super({FIELDS, FORM_NAME, app});
  }

  /**
	* doesn't Extract data bc final object passed
	* @param {Object} data object
	* @return {Object}        forma data
	**/
  extract(data){
    return data;
  }
};
