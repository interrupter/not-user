const { ACTION_DATA_TYPES } = require("not-node/src/manifest/const");

const FIELDS = [
    ["_id", "not-node//_id"],
    ["userID", "not-node//ID"],
    ["username", "not-user//username"],
    ["email", "not-user//email"],
    ["password", "not-user//password"],
    ["passwordRepeat", "not-user//passwordRepeat"],
    ["country", "not-user//country"],
    ["role", "not-user//role"],
    ["code", "not-user//code"],
    ["telephone", "not-user//telephone"],
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
                },
            ],
            data: [ACTION_DATA_TYPES.DATA],
            fields: [
                "username",
                "telephone",
                "email",
                "password",
                "passwordRepeat",
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
        },
        confirmEmail: {
            method: "get",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                },
                {
                    auth: true,
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
            fields: ["email", "password"],
        },
        requestLoginCodeOnEmail: {
            method: "post",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                },
            ],
            postFix: actionNamePath,
            title: "not-user:form_requestLoginCodeOnEmail_title",
            fields: ["email"],
        },
        requestLoginCodeOnTelephone: {
            method: "post",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                },
            ],
            postFix: actionNamePath,
            title: "not-user:form_requestLoginCodeOnTelephone_title",
            fields: ["telephone"],
        },
        loginByCode: {
            method: "get",
            data: [ACTION_DATA_TYPES.DATA],
            rules: [
                {
                    auth: false,
                },
            ],
            postFix: actionNamePath,
            title: "not-user:form_loginByCode_title",
            fields: ["code"],
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
                },
            ],
            data: [ACTION_DATA_TYPES.DATA],
            fields: ["email", "submit"],
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
