const notNode = require('not-node');
const {notValidationError} = require('not-error');
const {MODULE_NAME} = require('../const');
//DB related validation tools
const Form = require('not-node').Form;
//form
const FIELDS = [
  ['username', 'not-user//username'],
  ['email', 'not-user//email'],
  ['password', 'not-user//password'],
  ['role', 'not-user//role'],
  ['telephone', 'not-user//telephone'],
  ['country', 'not-user//country'],
  ['active', 'not-user//active'],
  ['ip', 'not-user//ip']
];

const FORM_NAME = `${MODULE_NAME}:NewUserForm`;

const validateUsernameAvailability = require('./validators/validateUsernameAvailability');
/**
	*
	**/
module.exports = class NewUserForm extends Form{
  constructor({app}){
    super({FIELDS, FORM_NAME, app});
  }

  /**
	* doens't Extract data bc final object passed
	* @param {Object} data object
	* @return {Object}        forma data
	**/
  extract(data){
    return data;
  }

  getFormValidationRules(){
    return [
      validateUsernameAvailability
    ];
  }

};
