const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator(val, { validator }) {
            return validator.isMobilePhone(val.replace(/\D/g, ""));
        },
        message: `${MODULE_NAME}:telephone_value_is_not_valid`,
    },
];
