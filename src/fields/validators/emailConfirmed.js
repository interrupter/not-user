const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator(val) {
            return typeof val === "boolean";
        },
        message: `${MODULE_NAME}:emailConfirmed_value_is_not_valid`,
    },
];
