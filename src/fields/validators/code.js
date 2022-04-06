module.exports = [{
  validator:(val, {validator})=>{
    return validator.isUUID(val, 4);
  },
  message: 'code_is_not_valid'
}];
