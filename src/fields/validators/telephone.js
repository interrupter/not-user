module.exports = [{
  validator(val, {validator}) {
    return validator.isMobilePhone(val.replace(/\D/g, ''));
  },
  message: 'telephone_value_is_not_valid'
}];
