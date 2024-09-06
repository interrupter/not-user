const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const notFieldsFilter = require("not-node/src/fields/filter");

module.exports = {
    model: {
        type: Schema.Types.Mixed,
        required: false,
        searchable: true,
        safe: notFieldsFilter.initSafetyProtocol(
            ["root", "admin"],
            ["root", "admin"],
            ["@*"],
            ["root", "admin"],
            ["@system"]
        ),
    },
    ui: {
        component: "UITextfield",
        label: "not-user:field_confirm_label",
        placeholder: "not-user:field_confirm_placeholder",
        readonly: true,
    },
};
