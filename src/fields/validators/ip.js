const { MODULE_NAME } = require("../../const");

module.exports = [
    {
        validator: (val, { validator }) => {
            if (val.indexOf(",") > -1) {
                return val
                    .split(",")
                    .map((ip) => ip.trim())
                    .every((ip) => validator.isIP(ip));
            } else {
                return validator.isIP(val);
            }
        },
        message: `${MODULE_NAME}:ip_address_is_not_valid`,
    },
];
