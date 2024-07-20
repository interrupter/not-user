module.exports = {
    model: "role",
    url: "/api/:modelName",
    fields: {},
    actions: {
        listAll: {
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
