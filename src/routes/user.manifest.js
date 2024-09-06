const { ACTION_DATA_TYPES } = require("not-node/src/manifest/const");
const { ACTION_SIGNATURES } = require("not-node/src/auth/const");

const FIELDS = [
    ["_id", "not-node//_id"],
    ["userID", "not-node//ID"],
    ["passwordRepeat", "not-user//passwordRepeat"],
    ["password", "not-user//password"],
    ["code", "not-user//code"],
];

const actionNamePath = "/:actionName";
const idActionPath = "/:record[_id]/:actionName";

const returnWrapper = (result) => {
    return result;
};

module.exports = {
    model: "user",
    url: "/api/:modelName",
    showMessages: true,
    fields: FIELDS,
    privateFields: ["salt", "hashedPassword"],
    actions: {
        /**
		Guest action
		**/
        register: {
            method: "post",
            title: "Регистрация",
            rules: [
                {
                    auth: false,
                    fields: [
                        "username",
                        "telephone",
                        "email",
                        "password",
                        "passwordRepeat",
                    ],
                },
            ],
            data: [ACTION_DATA_TYPES.DATA],
            return: returnWrapper([
                "_id",
                "role",
                "active",
                "email",
                "username",
                "emailConfirmed",
                "telephoneConfirmed",
                "token",
            ]),
            postFix: actionNamePath,
        },
        confirmEmail: {
            signature: ACTION_SIGNATURES.CREATE,
            method: "get",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: true,
                },
                {
                    auth: false,
                },
            ],
            postFix: actionNamePath,
        },
        login: {
            method: "post",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                    fields: ["email", "password"],
                },
            ],
            return: returnWrapper([
                "_id",
                "role",
                "active",
                "email",
                "username",
                "emailConfirmed",
                "telephoneConfirmed",
                "token",
            ]),
            postFix: actionNamePath,
            title: "not-user:form_login_title",
        },
        requestLoginCodeOnEmail: {
            method: "post",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                    fields: ["email"],
                },
            ],
            postFix: actionNamePath,
            title: "not-user:form_requestLoginCodeOnEmail_title",
        },
        requestLoginCodeOnTelephone: {
            method: "post",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                    fields: ["telephone"],
                },
            ],
            postFix: actionNamePath,
            title: "not-user:form_requestLoginCodeOnTelephone_title",
        },
        loginByCode: {
            method: "get",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                    fields: ["code"],
                },
            ],
            postFix: actionNamePath,
            title: "not-user:form_loginByCode_title",
        },
        requestEmailConfirmation: {
            method: "post",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: true,
                },
            ],
            postFix: actionNamePath,
        },
        requestPasswordReset: {
            method: "post",
            title: "not-user:form_requestPasswordReset_title",
            rules: [
                {
                    auth: false,
                    fields: ["email", "submit"],
                },
            ],
            data: [ACTION_DATA_TYPES.DATA],
            postFix: actionNamePath,
        },
        resetPassword: {
            method: "get",
            title: "not-user:form_resetPassword_title",
            rules: [
                {
                    auth: false,
                },
            ],
            postFix: actionNamePath,
        },
        /**
		Authentificated user action
		**/
        logout: {
            method: "post",
            rules: [
                {
                    auth: true,
                },
            ],
            postFix: actionNamePath,
        },
        changePassword: {
            method: "post",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: true,
                },
            ],
            postFix: actionNamePath,
        },
        profile: {
            method: "post",
            rules: [
                {
                    auth: true,
                },
            ],
            postFix: actionNamePath,
        },
        update: {
            method: "post",
            rules: [
                {
                    root: true,
                    fields: [
                        "_id",
                        "username",
                        "email",
                        "emailConfirmed",
                        "telephone",
                        "active",
                        "country",
                        "role",
                    ],
                },
                {
                    auth: true,
                    role: ["admin"],
                    fields: [
                        "_id",
                        "username",
                        "email",
                        "emailConfirmed",
                        "telephone",
                        "active",
                        "country",
                        "role",
                    ],
                },
                {
                    auth: true,
                    fields: [
                        "_id",
                        "username",
                        "email",
                        "telephone",
                        "active",
                        "country",
                        "role",
                    ],
                },
            ],
            data: [ACTION_DATA_TYPES.DATA],
            postFix: idActionPath,
        },
        status: {
            method: "get",
            rules: [
                {
                    return: returnWrapper([
                        "_id",
                        "role",
                        "active",
                        "email",
                        "username",
                        "emailConfirmed",
                        "telephoneConfirmed",
                        "token",
                    ]),
                    auth: true,
                },
                {
                    return: returnWrapper(["auth", "sid", "ip"]),
                    auth: false,
                },
            ],
            postFix: actionNamePath,
        },
        token: {
            method: "get",
            rules: [
                {
                    auth: true,
                },
                {
                    auth: false,
                },
            ],
            postFix: actionNamePath,
        },
        get: {
            method: "get",
            rules: [
                {
                    root: true,
                },
                {
                    auth: true,
                },
            ],
            fields: [
                "_id",
                "username",
                "email",
                "telephone",
                "active",
                "country",
                "role",
            ],
            postFix: idActionPath,
        },
        /**
		Admin action
		**/
        create: {
            method: "put",
            rules: [
                {
                    root: true,
                },
                {
                    auth: true,
                    role: "admin",
                },
            ],
            fields: [
                "username",
                "email",
                "telephone",
                "password",
                "passwordRepeat",
                "active",
                "country",
                "role",
            ],
            data: [ACTION_DATA_TYPES.DATA],
            postFix: actionNamePath,
        },
        delete: {
            method: "delete",
            rules: [
                {
                    root: true,
                },
                {
                    auth: true,
                    role: "admin",
                },
            ],
            data: [ACTION_DATA_TYPES.DATA],
            postFix: idActionPath,
        },
        listAndCount: {
            method: "get",
            data: [
                ACTION_DATA_TYPES.DATA,
                ACTION_DATA_TYPES.SEARCH,
                ACTION_DATA_TYPES.FILTER,
            ],
            rules: [
                {
                    root: true,
                },
                {
                    auth: true,
                    role: "admin",
                },
            ],
            postFix: actionNamePath,
        },
    },
};
