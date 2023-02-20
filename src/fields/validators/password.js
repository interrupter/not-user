const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isLength(val, { min: 6, max: 256 });
        },
        message: `${MODULE_NAME}:password_length_not_valid`,
    },
];
