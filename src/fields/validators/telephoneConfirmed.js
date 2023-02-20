const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator(val) {
            return typeof val === "boolean";
        },
        message: `${MODULE_NAME}:telephoneConfirmed_value_is_not_valid`,
    },
];
