const {MODULE_NAME, MIN_SALT_LEN} = require('../../const');
module.exports = [{
    validator: (val) => {
        return typeof val === 'string';
    },
    message: `${MODULE_NAME}:salt_type_is_not_string`,
},
{
    validator: (val) => {
        return val.length >= MIN_SALT_LEN;
    },
    message: `${MODULE_NAME}:salt_length_is_too_short`,
}
];