const notFieldsFilter = require("not-node/src/fields/filter");

module.exports = {
    ui: {
        component: "UITextfield",
        label: "not-user:field_code_label",
    },
    model: {
        type: String,
        searchable: true,
        required: true,
        //system and admins could create, read, delete, every one could update
        //@* could try to enter recieved
        safe: notFieldsFilter.initSafetyProtocol(
            ["root", "admin"],
            ["root", "admin"],
            ["*"],
            ["root", "admin"],
            ["@system"]
        ),
    },
};
