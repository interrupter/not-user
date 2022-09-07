module.exports = {
    model: {
        type: String,
        required: false,
        safe: {
            update: ["@system"],
            read: ["@owner", "root", "admin"],
        },
    },
};
