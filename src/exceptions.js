const { notRequestError, notError } = require("not-error");

class ExceptionRegistrationIsRestricted extends notRequestError {
    constructor() {
        super("not-user:exception_registration_is_restricted");
    }
}

module.exports.ExceptionRegistrationIsRestricted =
    ExceptionRegistrationIsRestricted;

class ExceptionIdentityTokensSecretIsEmpty extends notError {
    constructor() {
        super("not-user:exception_token_secret_option_is_empty");
    }
}

module.exports.ExceptionIdentityTokensSecretIsEmpty =
    ExceptionIdentityTokensSecretIsEmpty;

class ExceptionIdentityTokensSecretIsTooShort extends notError {
    constructor({ secret, min }) {
        super("not-user:exception_token_secret_is_too_short", { secret, min });
    }
}

module.exports.ExceptionIdentityTokensSecretIsTooShort =
    ExceptionIdentityTokensSecretIsTooShort;
