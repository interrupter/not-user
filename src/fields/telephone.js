module.exports = {
    ui: {
        component: "UITelephone",
        label: "not-user:field_telephone_label",
    },
    model: {
        type: String,
        unique: false,
        searchable: true,
        required: false,
        safe: require("not-node/src/core/safety.protocols")
            .ownerRootAdminCRUD_clientC,
    },
};
