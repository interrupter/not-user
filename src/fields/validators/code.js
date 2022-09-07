module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isUUID(val, 4);
        },
        message: "not-user:code_is_not_valid",
    },
];
