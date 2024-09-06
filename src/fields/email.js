const SafetyProtocols = require("not-node/src/core/safety.protocols");

module.exports = {
    ui: {
        component: "UIEmail",
        label: "not-user:field_email_label",
    },
    model: {
        type: String,
        unique: true,
        searchable: true,
        required: true,
        safe: SafetyProtocols.ownerRootAdminCRUD_clientC,
    },
};
