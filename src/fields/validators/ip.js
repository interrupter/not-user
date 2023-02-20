const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isIP(val);
        },
        message: `${MODULE_NAME}:ip_address_is_not_valid`,
    },
];
