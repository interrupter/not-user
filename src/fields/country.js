const SafetyProtocols = require("not-node/src/core/safety.protocols");
const notFieldsFilter = require("not-node/src/fields/filter");

module.exports = {
    ui: {
        component: "UISelect",
        label: "not-user:field_country_label",
        variants: [{ id: "ru", title: "RU" }],
        //variantsSource: 'country'
    },
    model: {
        type: String,
        required: false,
        searchable: true,
        default: "ru",
        safe: notFieldsFilter.mergeSafetyProtocols(
            SafetyProtocols.rootAdminCRUD_allR,
            notFieldsFilter.initSafetyProtocol(
                ["@owner"],
                ["@owner"],
                ["@owner"]
            )
        ),
    },
};
