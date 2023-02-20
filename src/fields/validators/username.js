const {
    MODULE_NAME,
    USERNAME_LENGTH_MIN,
    USERNAME_LENGTH_MAX,
} = require("../../const");

module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isLength(val, {
                min: USERNAME_LENGTH_MIN,
                max: USERNAME_LENGTH_MAX,
            });
        },
        message: `${MODULE_NAME}:username_length_is_not_valid`,
    },
    {
        validator(val, { validator }) {
            return !validator.isEmail(val);
        },
        message: `${MODULE_NAME}:username_cant_be_email`,
    },
];
