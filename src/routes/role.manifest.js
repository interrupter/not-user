const { ACTION_SIGNATURES } = require("not-node/src/auth/const");

module.exports = {
    model: "role",
    url: "/api/:modelName",
    fields: {},
    actions: {
        listAll: {
            signature: ACTION_SIGNATURES.READ,
            method: "get",
            rules: [
                {
                    root: true,
                },
                {
                    auth: true,
                    role: "admin",
                },
            ],
            postFix: "/:actionName",
        },
    },
};
