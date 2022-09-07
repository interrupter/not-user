module.exports = [
    {
        validator(val) {
            return typeof val === "boolean";
        },
        message: "not-user:active_state_value_is_not_valid",
    },
];
