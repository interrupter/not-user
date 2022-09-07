module.exports = [
    {
        validator: (val, { validator }) => {
            return validator.isIP(val);
        },
        message: "not-user:ip_address_is_not_valid",
    },
];
