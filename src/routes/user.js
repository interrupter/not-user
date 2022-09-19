const { ExceptionRegistrationIsRestricted } = require("../exceptions.js");

const { MODULE_NAME } = require("../const");
const UserActions = [],
    AdminActions = ["listAndCount"],
    MODEL_NAME = "User",
    MODEL_OPTIONS = {
        short: true,
        MODULE_NAME,
        MODEL_NAME,
        MODEL_TITLE: "Пользователь",
    },
    modMeta = require("not-meta");

const say = require("not-locale").sayForModule(MODULE_NAME),
    notNode = require("not-node"),
    { objHas, getIP } = require("not-node").Common,
    notAppIdentity = notNode.notAppIdentity,
    Log = require("not-log")(module, "User/Routes"),
    config = require("not-config").readerForModule("user");

function getLogic() {
    const notApp = notNode.Application;
    return notApp.getLogic("not-user//User");
}

function getAuthLogic() {
    const notApp = notNode.Application;
    return notApp.getLogic("not-user//Auth");
}

module.exports.before = async (req, res, next) => {
    const name = req.notRouteData.actionName;
    const FormValidator = notNode.Application.getForm(
        ["not-user", name.replace("_", "")].join("//")
    );
    if (FormValidator) {
        return await FormValidator.run(req, res, next);
    } else {
        return {};
    }
};

module.exports.after = (req, res, next, result) => {
    if (res.headersSent) {
        return;
    }
    const name = req.notRouteData.actionName;
    if (result && objHas(result, "__redirect__")) {
        res.status(200).redirect(result.__redirect__);
    } else {
        res.status(200).json({
            status: "ok",
            message: say(
                `action_message_${name}_success`,
                {},
                res.locals.locale
            ),
            result,
        });
    }
};

/**
 *   Guest actions
 **/

module.exports.register = async (req, res, next, prepared) => {
    Log.debug("register");
    if (config.get("restrict.registration")) {
        throw new ExceptionRegistrationIsRestricted();
    }
    let user = await getLogic().register(prepared);
    new notAppIdentity(req).setAuth(user._id, user.role);
    Log.info(
        `'${user.username}' authorized as ${req.session.user} ${req.session.role}`
    );
    const token = await getAuthLogic().token({
        ip: getIP(req),
        user,
    });
    return {
        ...user,
        token,
    };
};

module.exports.confirmEmail = async (req, res, next, prepared) => {
    Log.debug("confirmEmail");
    await getLogic().confirmEmail(prepared.code);
    //!TODO change redirect destination to specific page with success message
    return { __redirect__: "/login" };
};

module.exports.login = async (req, res, next, prepared) => {
    Log.debug("login route");
    const user = await getAuthLogic().login(prepared);
    const identity = new notAppIdentity(req);
    identity.setAuth(user._id, user.role);
    Log.info(
        `'${
            user.username
        }' authorized as ${identity.getUserId()} ${identity.getRole()}`
    );
    const token = await getAuthLogic().token({ ip: getIP(req), user });
    Log.debug({ username: user.username, role: user.role, token });
    return {
        ...user,
        token,
    };
};

module.exports.requestLoginCodeOnEmail = async (req, res, next, prepared) => {
    Log.debug("request login by code from email");
    await getAuthLogic().requestLoginCodeOnEmail(prepared);
};

module.exports.loginByCode = async (req, res, next, prepared) => {
    Log.debug("login by code from email or sms");
    const user = await getAuthLogic().loginByCode(prepared);
    const identity = new notAppIdentity(req);
    identity.setAuth(user._id, user.role);
    Log.info(
        `'${
            user.username
        }' authorized as ${identity.getUserId()} ${identity.getRole()} via emailed/smsed one-time code`
    );
    const token = await getAuthLogic().token({ ip: getIP(req), user });
    if (req.query.noRedirect) {
        return {
            ...user,
            token,
        };
    } else {
        return {
            __redirect__: "/",
        };
    }
};

module.exports.requestPasswordReset = async (req, res, next, prepared) => {
    Log.debug("user/requestPasswordReset");
    return await getAuthLogic().requestPasswordReset(prepared);
};

module.exports.resetPassword = async (req, res, next, prepared) => {
    Log.debug("user/resetPassword");
    await getAuthLogic().resetPassword(prepared);
    return { __redirect__: "/resetPasswordSuccess" };
};

/**
 *   Authorized user actions
 */
module.exports._logout = module.exports.logout = (req /*, res, next*/) => {
    Log.debug("user/(_)logout");
    const identity = new notAppIdentity(req);
    identity.setGuest();
};

module.exports._changePassword = module.exports.changePassword = async (
    req,
    res,
    next,
    prepared
) => {
    Log.debug("user/(_)changePassword");
    return await getAuthLogic().changePassword({
        user: req.user,
        ...prepared,
    });
};

module.exports.requestEmailConfirmation =
    module.exports._requestEmailConfirmation = async (
        req,
        res,
        next,
        prepared
    ) => {
        Log.debug("requestEmailVerification");
        await getLogic().requestEmailConfirmation({
            user: prepared.email,
        });
    };

module.exports.token = async (req /*, res, next*/) => {
    Log.debug("user/token");
    const params = {
        ip: getIP(req),
    };
    if (req.user) {
        params.user = req.user.toObject();
    }
    return await getAuthLogic().token(params);
};

module.exports.profile = async (req /*, res, next*/) => {
    Log.debug("user/profile");
    return await getLogic().profile({
        activeUser: req.user,
        ip: getIP(req),
    });
};

module.exports.update = async (req, res, next, prepared) => {
    Log.debug("user.update");
    return await getLogic().update(prepared);
};

module.exports.status = async (req /*, res, next*/) => {
    let result = {};
    if (req.user && req.user.active) {
        result = await getAuthLogic().status({
            identity: new notAppIdentity(req),
            user: req.user.toObject(),
        });
    } else {
        result = notAppIdentity.extractAuthData(req);
    }
    Log.log("user status", result);
    return result;
};

/**
 *   Admin actions
 */
module.exports._create = async (req, res, next, prepared) => {
    Log.debug("user._create");
    const data = {
        activeUser: req.user,
        data: prepared,
        ip: getIP(req),
    };
    return await getLogic().createUser(data);
};

module.exports._update = async (req, res, next, prepared) => {
    Log.debug("user/_update");
    return await getLogic().update(prepared);
};

module.exports._delete = async (req, res, next, prepared) => {
    Log.debug("user/_delete");
    return await getLogic().delete(prepared);
};

module.exports.get = async (req, res, next, prepared) => {
    Log.debug("user/get");
    return await getLogic().get(prepared);
};

module.exports._get = async (req, res, next, prepared) => {
    Log.debug("user/_get", prepared);
    return await getLogic().get(prepared);
};

modMeta.extend(modMeta.Route, module.exports, AdminActions, MODEL_OPTIONS, "_");
modMeta.extend(modMeta.Route, module.exports, UserActions, MODEL_OPTIONS);
