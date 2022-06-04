module.exports = [{
  validator(val) {
    return (typeof val === 'boolean');
  },
  message: 'not-user:emailConfirmed_value_is_not_valid'
}];
