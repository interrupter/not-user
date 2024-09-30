//статус пользователя, активен или нет

module.exports = {
    parent: "not-node//active",
    model: {
        type: Boolean,
        required: true,
        searchable: true,
        default: true,
        safe: require("not-node/src/core/safety.protocols")
            .rootAdminCRUD_ownerR,
    },
};
