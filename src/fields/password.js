const validatorsFront = require("./validators/password");

module.exports = {
    model: {
        type: String,
        required: true,
        validate: validatorsFront,
    },
    ui: {
        component: "UIPassword",
        label: "not-user:field_password_label",
    },
};
