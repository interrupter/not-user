const SafetyProtocols = require("not-node/src/core/safety.protocols");
const notFieldsFilter = require("not-node/src/fields/filter");

//дата создания
module.exports = {
    parent: 'not-node//createdAt',
    model: {
        type: Date,
        default: Date.now,
        safe: notFieldsFilter.mergeSafetyProtocols(
            SafetyProtocols.systemManageableSecret,
            SafetyProtocols.publicReadable
        ),        
    },
    ui: {
        component: "UITextfield",
        label: "not-user:field_created_label",
        placeholder: "not-user:field_created_placeholder",
        readonly: true,
    },
};
