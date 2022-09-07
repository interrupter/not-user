//дата создания
module.exports = {
    model: {
        type: Date,
        default: Date.now,
        safe: {
            update: ["*"],
            read: ["*"],
        },
    },
    ui: {
        component: "UITextfield",
        label: "not-user:field_created_label",
        placeholder: "not-user:field_created_placeholder",
        readonly: true,
    },
};
