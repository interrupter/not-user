const _getValidatorEnvGetter = require("../validationEnv.js");
const { MODULE_NAME } = require("../const");
//DB related validation tools
const Form = require("not-node").Form;
//not-node
const { getIP } = require("not-node").Common;
//form
const FIELDS = [
    ["oldPass", "not-user//password"],
    ["newPass", "not-user//password"],
    ["ip", "not-user//ip"],
];
const FORM_NAME = `${MODULE_NAME}:ChangePasswordForm`;

/**
 *
 **/
module.exports = class ChangePasswordForm extends Form {
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
            oldPass: req.body.oldPassword,
            newPass: req.body.newPassword,
            ip: getIP(req),
        };
    }

    getValidatorEnvGetter() {
        return _getValidatorEnvGetter;
    }
};
