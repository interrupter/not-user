const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator(val) {
            return val === "ru";
        },
        message: `${MODULE_NAME}:selected_user_language_is_not_valid`,
    },
];
