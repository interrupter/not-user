const SafetyProtocols = require("not-node/src/core/safety.protocols");
const notFieldsFilter = require("not-node/src/fields/filter");

module.exports = {
    ui: {
        component: "UIRole",
        label: "not-user:field_role_label",
        variantsSource: "role",
    },
    model: {
        type: [String],
        required: true,
        searchable: true,
        default: ["user"],
        validate: [],
        safe: notFieldsFilter.mergeSafetyProtocols(
            SafetyProtocols.ownerRootAdmin,
            notFieldsFilter.initSafetyProtocol(
                ["-@owner"],
                [],
                ["-@owner"],
                ["-@owner"]
            )
        ),
    },
};
