module.exports = [{
  validator(val) {
    return (typeof val === 'boolean');
  },
  message: 'telephoneConfirmed_value_is_not_valid'
}];
