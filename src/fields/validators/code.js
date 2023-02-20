const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isUUID(val, 4);
        },
        message: `${MODULE_NAME}:code_is_not_valid`,
    },
];
