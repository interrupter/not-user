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
        safe: {
            update: ["@owner", "root", "admin"],
            read: ["@owner", "root", "admin"],
        },
    },
};
