module.exports = [
    {
        validator(val) {
            return val === "ru";
        },
        message: "not-user:selected_user_language_is_not_valid",
    },
];
