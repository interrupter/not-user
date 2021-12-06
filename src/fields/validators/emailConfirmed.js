module.exports = [{
  validator(val) {
    return (typeof val === 'boolean');
  },
  message: 'emailConfirmed_value_is_not_valid'
}];
