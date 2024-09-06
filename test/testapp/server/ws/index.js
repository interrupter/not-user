const jwt = require("jsonwebtoken"),
    config = require("not-config").createReader(),
    log = require("not-log")(module, "WS"),
    authRoute = require("./auth.js");

const { notWSMessenger } = require("not-ws");
const {
    notRequestError,
    notValidationError,
} = require("not-error/src/index.cjs");

const mainValidators = {
    credentials(credentials, serviceData) {
        try {
            log.log(serviceData.type, serviceData.name);
            let cred = jwt.verify(
                credentials,
                config.get("modules:user:secret")
            );
            if (cred) {
                return authRoute({ serviceData, cred });
            } else {
                return false;
            }
        } catch (e) {
            log.error(e);
            return false;
        }
    },
};

function wrapError(data, serviceData, error) {
    if (error instanceof notRequestError) {
        return {
            status: "error",
            message: error.getResult().message,
            errors: error.getResult().errors,
        };
    } else if (error instanceof notValidationError) {
        return {
            status: "error",
            message: error.message,
            errors: error.getFieldsErrors(),
        };
    } else {
        return {
            status: "error",
            message: error.message,
        };
    }
}

function wrapOk(result) {
    return {
        status: "ok",
        result,
    };
}

module.exports = {
    servers: {
        main: {
            logger: log,
            jwt: {
                key: config.get("modules:user:secret"),
            },
            getMessenger() {
                return new notWSMessenger({
                    logger: log,
                    secure: true,
                    validateTypeAndName: false,
                    validators: mainValidators,
                    wrap: {
                        ok: wrapOk,
                        error: wrapError,
                    },
                    types: {
                        request: [],
                        response: [],
                        event: [],
                        __service: [],
                    },
                });
            },
        },
    },
};
