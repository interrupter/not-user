const _getValidatorEnvGetter = require("../validationEnv.js");
const { MODULE_NAME } = require("../const");
//DB related validation tools
const Form = require("not-node").Form;
//not-node
const { getIP } = require("not-node").Common;
//form
const FIELDS = [
    ["code", "not-user//code"],
    ["ip", "not-user//ip"],
];
const FORM_NAME = `${MODULE_NAME}:LoginByCodeForm`;

/**
 *
 **/
module.exports = class LoginByCodeForm extends Form {
    constructor({ app }) {
        super({ FIELDS, FORM_NAME, app });
    }

    /**
     * Extracts data
     * @param {import('not-node/src/types.js').notNodeExpressRequest} req expressjs request object
     * @return {Object}        forma data
     **/
    extract(req) {
        return {
            code: req.query.code,
            ip: getIP(req),
        };
    }

    getValidatorEnvGetter() {
        return _getValidatorEnvGetter;
    }
};
