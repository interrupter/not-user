module.exports = [{
  validator(val) {
    return (typeof val === 'boolean');
  },
  message: 'not-user:telephoneConfirmed_value_is_not_valid'
}];
