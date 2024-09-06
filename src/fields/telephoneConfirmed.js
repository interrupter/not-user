const SafetyProtocols = require("not-node/src/core/safety.protocols");

module.exports = {
    ui: {
        component: "UISwitch",
        label: "not-user:field_emailConfirmed_label",
    },
    model: {
        type: Boolean,
        searchable: true,
        required: true,
        default: false,
        safe: SafetyProtocols.systemManageable,
    },
};
