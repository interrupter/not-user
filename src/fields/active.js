//статус пользователя, активен или нет

module.exports = {
    model: {
        type: Boolean,
        required: true,
        searchable: true,
        default: true,
        safe: {
            update: ["@system", "root", "admin"],
            read: ["@owner", "root", "admin"],
        },
    },
};
