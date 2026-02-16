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
                    return: ['primary','secondary'],
                },
                {
                    auth: true,
                    role: "admin",
                    return: ['primary','secondary'],
                },
            ],
            postFix: "/:actionName",
        },
    },
};
