module.exports = [
  {
    validator(val) {
      return val === 'ru';
    },
    message: 'selected_user_language_is_not_valid'
  }
];
