module.exports = [{
  validator:(val, {validator})=>{
    return validator.isEmail(val);
  },
  message: 'email_is_not_valid'
}];
