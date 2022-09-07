const { notValidationError } = require("not-error");

module.exports = ({ password, passwordRepeat, username }) => {
    if (password !== passwordRepeat) {
        throw new notValidationError(
            "not-user:passwordRepeat_should_be_same_as_password",
            {
                passwordRepeat: [
                    "not-user:passwordRepeat_should_be_same_as_password",
                ],
            },
            undefined,
            {
                username,
            }
        );
    }
};
