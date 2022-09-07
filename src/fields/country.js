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
        safe: {
            update: ["@system", "@owner", "root", "admin"],
            read: ["*"],
        },
    },
};
