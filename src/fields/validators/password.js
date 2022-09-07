module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isLength(val, { min: 6, max: 256 });
        },
        message: "not-user:password_length_not_valid",
    },
];
