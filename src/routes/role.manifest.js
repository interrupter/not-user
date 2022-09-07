module.exports = {
    model: "role",
    url: "/api/:modelName",
    fields: {},
    actions: {
        listAll: {
            method: "get",
            rules: [
                {
                    auth: true,
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
