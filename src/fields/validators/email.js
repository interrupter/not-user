const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isEmail(val);
        },
        message: `${MODULE_NAME}:email_is_not_valid`,
    },
];
