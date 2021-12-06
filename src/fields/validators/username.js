module.exports = [{
  validator: 'isLength',
  arguments: {
    min: 3,
    max: 60
  },
  message: 'username_length_is_not_valid'
}, {
  validator(val, {validator}) {
    return !validator.isEmail(val);
  },
  message: 'username_cant_be_email'
}];
