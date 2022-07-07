const { notRequestError } = require("not-error");

class ExceptionRegistrationIsRestricted extends notRequestError {
    constructor() {
        super("not-user:exception_registration_is_restricted");
    }
}

module.exports.ExceptionRegistrationIsRestricted =
    ExceptionRegistrationIsRestricted;
