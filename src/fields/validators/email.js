module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isEmail(val);
        },
        message: "not-user:email_is_not_valid",
    },
];
