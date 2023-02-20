const validator = require("validator");
const config = require("not-config").forModule("not-user");
module.exports = () => {
    return { validator, config };
};
