module.exports = [
    {
        validator(val, { validator }) {
            return validator.isMobilePhone(val.replace(/\D/g, ""));
        },
        message: "not-user:telephone_value_is_not_valid",
    },
];
