const _getValidatorEnvGetter = require("../validationEnv.js");
const { MODULE_NAME } = require("../const");

//DB related validation tools
const Form = require("not-node").Form;
//not-node
const { getIP } = require("not-node").Common;
//form
const FIELDS = [
    ["username", "not-user//username"],
    ["email", "not-user//email"],
    ["password", "not-user//password"],
    ["ip", "not-user//ip"],
];
const FORM_NAME = `${MODULE_NAME}:RegisterForm`;

/**
 *
 **/
module.exports = class RegisterForm extends Form {
    constructor({ app }) {
        super({ FIELDS, FORM_NAME, app });
    }

    /**
     * Extracts data
     * @param {ExpressRequest} req expressjs request object
     * @return {Object}        forma data
     **/
    extract(req) {
        return {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            ip: getIP(req),
        };
    }

    getValidatorEnvGetter() {
        return _getValidatorEnvGetter;
    }
};
