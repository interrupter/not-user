const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator(val) {
            return typeof val === "boolean";
        },
        message: `${MODULE_NAME}:active_state_value_is_not_valid`,
    },
];
