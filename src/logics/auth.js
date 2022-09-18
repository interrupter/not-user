const notNode = require("not-node");
const Log = require("not-log")(module, "User/Logics/Auth");
const config = require("not-config").readerForModule("user");
const phrase = require("not-locale").modulePhrase("not-user");
const { notValidationError, notRequestError } = require("not-error");

const MODEL_NAME = "Auth";
module.exports.thisLogicName = MODEL_NAME;

const MODEL_PATH = "not-user//User";
const MAILER_LOGIC_PATH = "not-user//UserMailer";

function validateEmail(email) {
    try {
        const User = notNode.Application.getModel(MODEL_PATH);
        if (!User.validateEmail(email)) {
            throw new Error(phrase("email_is_not_valid"));
        }
    } catch (e) {
        throw new notValidationError(
            phrase("email_is_not_valid"),
            { email: [phrase("email_is_not_valid")] },
            null,
            { email }
        );
    }
}

module.exports[MODEL_NAME] = class AuthLogic {
    static async login({ password, email, ip }) {
        Log.log("login");
        const User = notNode.Application.getModel(MODEL_PATH);
        let user = await User.authorize(email, password);
        if (user.emailConfirmed) {
            user.ip = ip;
            await user.save();
            Log.log({
                module: "user",
                logic: "User",
                action: "login",
                by: user._id,
                target: user._id,
                targetID: user.userID,
                case: "ok",
            });
            return User.clearFromUnsafe(user.toObject());
        } else {
            await notNode.Application.getLogic(
                MAILER_LOGIC_PATH
            ).sendConfirmationEmail({
                user,
            });
            throw new notRequestError(
                phrase("email_is_not_confirmed"),
                {
                    code: 404,
                    errors: { email: [phrase("email_is_not_confirmed")] },
                    params: { user: User.clearFromUnsafe(user.toObject()) },
                },
                null
            );
        }
    }

    static async requestLoginCodeOnEmail({ email }) {
        const User = notNode.Application.getModel(MODEL_PATH);
        validateEmail(email);
        const user = await User.getByEmail(email);
        if (!user) {
            throw new notRequestError(phrase("user_not_found"), {
                code: 403,
                params: { email },
            });
        }
        await notNode.Application.getLogic(
            MAILER_LOGIC_PATH
        ).sendOneTimeLoginCode({ user });
    }

    static async loginByCode({ code, ip }) {
        const User = notNode.Application.getModel(MODEL_PATH);
        const OTCLogic = notNode.Application.getLogic("not-user//OneTimeCode");
        const oneTimeCode = await OTCLogic.retrieveAndRedeemOTCFor(
            code,
            "loginByCode"
        );
        const user = await User.findById(oneTimeCode.payload.owner);
        user.ip = ip;
        await user.save();
        return User.clearFromUnsafe(user.toObject());
    }

    static async requestPasswordReset({ email }) {
        let User = notNode.Application.getModel(MODEL_PATH);
        validateEmail(email);
        const user = User.getByEmail(email);
        if (user) {
            await notNode.Application.getLogic(
                MAILER_LOGIC_PATH
            ).sendPasswordResetCode(user);
        } else {
            throw new notRequestError(phrase("user_not_found"), { code: 403 });
        }
    }

    static async resetPassword({ code }) {
        try {
            const User = notNode.Application.getModel(MODEL_PATH);
            const oneTimeCode = await notNode.Application.getLogic(
                "not-user//OneTimeCode"
            ).retrieveAndRedeemOTCFor(code, "resetPassword");

            let user = await User.findById(oneTimeCode.payload.owner);
            if (!user) {
                throw new notRequestError(phrase("user_not_found"), {
                    code: 403,
                });
            }
            const pass = user.createNewPassword();
            await user.save();
            await notNode.Application.getLogic(
                MAILER_LOGIC_PATH
            ).sendNewPassword({ user, pass });
            Log.info(
                `'${user.username}' reseted password as ${user._id} ${user.role} via emailed one-time code`
            );
        } catch (e) {
            throw new notRequestError(
                e.message,
                {
                    code: 500,
                    redirect: "/resetPasswordError",
                },
                e
            );
        }
    }

    static checkUserPassword({ user, pass, context }) {
        if (!user.checkPassword(pass)) {
            throw new notRequestError(phrase("password_incorrect"), {
                ...context,
                code: 403,
                errors: {
                    oldPassword: [phrase("password_incorrect")],
                },
            });
        }
    }

    static validatePasswordFormat({ password, context }) {
        const User = notNode.Application.getModel(MODEL_PATH);
        if (!User.validatePassword(password)) {
            throw new notRequestError(phrase("password_length_not_valid"), {
                ...context,
                code: 403,
                errors: {
                    newPassword: [phrase("password_length_not_valid")],
                },
            });
        }
    }

    static async changePassword({ user, oldPass, newPass, ip }) {
        const context = {
            userId: user._id,
            role: user.getPrimaryRole(),
            ip,
        };
        AuthLogic.checkUserPassword({ user, pass: oldPass, context });
        AuthLogic.validatePasswordFormat({ password: newPass, context });
        user.password = newPass;
        await user.save();
        await notNode.Application.getLogic(
            MAILER_LOGIC_PATH
        ).sendChangePasswordNotification({ user });
        Log.info(
            `'${user.username}' changed password as ${user._id} ${user.role} via entering old password and new one`
        );
    }

    static async token({ ip, user }) {
        return notNode.notAppIdentity.identity
            .getProvider("token")
            .createToken({
                ip,
                user,
                additionalFields: ["emailConfirmed", "telephoneConfirmed"],
            });
    }

    /**
     *	First have role based security rights supremacy over second
     **/
    static userHaveSupremacy(activeUser, targetUser) {
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        //stronger -> weaker
        const rolesPriority =
            config.get("roles:priority") || User.DEFAULT_ROLES_LIST;
        return (
            //active user should be admin or root
            notNode.Auth.compareRoles(
                activeUser.role,
                ["root", "admin"],
                false
            ) &&
            //target should be lower
            notNode.Auth.checkSupremacy(
                activeUser.role,
                targetUser.role,
                rolesPriority
            )
        );
    }

    static status({ identity, user }) {
        const token = identity.token;
        const User = notNode.Application.getModel(MODEL_PATH);
        return {
            ...User.clearFromUnsafe(user.toObject()),
            token,
        };
    }
};
