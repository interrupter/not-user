const validatorsFront = require("./validators/password");
const SafetyProtocols = require("not-node/src/core/safety.protocols");
const notFieldsFilter = require("not-node/src/fields/filter");

module.exports = {
    model: {
        type: String,
        required: true,
        validate: validatorsFront,
        safe: notFieldsFilter.mergeSafetyProtocols(
            SafetyProtocols.ownerRootAdminCRUD_clientC,
            notFieldsFilter.initSafetyProtocol(["@*"], [], ["@owner"])
        ),
    },
    ui: {
        component: "UIPassword",
        label: "not-user:field_password_label",
    },
};
