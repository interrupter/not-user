const notNode = require("not-node");
const phrase = require("not-locale").modulePhrase("not-user");
const Log = require("not-log")(module, "user:logics");
const { notRequestError, notValidationError } = require("not-error");

const MODEL_NAME = "User";
const MODEL_PATH = "not-user//User";
module.exports.thisLogicName = MODEL_NAME;

const LogicMailer = "not-user//UserMailer";

module.exports[MODEL_NAME] = class UserLogic {
    /**
     *  Creates User document from input
     */
    static async createNewUserDocument(data) {
        Log?.debug("UserLogic//createNewUserDocument");
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        let newUser = new User({
            ...data,
            userID: 0,
        });
        //validate safety of data
        await newUser.validate();
        //user key data is not duplicating another
        let unique = await User.isUnique(newUser.username, newUser.email);
        if (unique !== true) {
            throw new notValidationError(
                phrase("user_uniqueness_verification_error"),
                unique
            );
        }
        //saving
        await User.add(newUser);
        return newUser;
    }

    /**
     *  Creating new user document and returning {status: 'ok'}
     * in case of error throws exception Error, notRequestError, notValidationError
     **/
    static async register(data) {
        Log?.debug("UserLogic//register");
        let newUser = await UserLogic.createNewUserDocument({
            ...data,
        });
        await notNode.Application.getLogic(LogicMailer).sendConfirmationEmail({
            user: newUser,
        });
        Log?.log({
            module: "user",
            logic: "User",
            action: "register",
            by: newUser._id,
            target: newUser._id,
            targetID: newUser.userID,
        });
        const User = notNode.Application.getModel(MODEL_PATH);
        return User.clearFromUnsafe(newUser);
    }

    static async requestEmailConfirmation({ user }) {
        await notNode.Application.getLogic(LogicMailer).sendConfirmationEmail({
            user,
        });
        Log?.log({
            module: "user",
            logic: "User",
            action: "requestEmailConfirmation",
            by: user._id,
            target: user._id,
            targetID: user.userID,
        });
    }

    static async loadUser(targetId) {
        Log?.debug("UserLogic//loadUser");
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        let targetUser = await User.findOne({
            _id: targetId,
            __latest: true,
            __closed: false,
        }).exec();
        if (!targetUser) {
            throw new notRequestError(phrase("user_not_found"), {
                code: 403,
                params: { targetId },
            });
        }
        return targetUser;
    }

    /**
     *  Validating oneTimeCode, reddeming and confirming linked user email
     *	and returning {status: 'ok'}
     * 	in case of error throws exception Error, notRequestError, notValidationError
     * 	@param {string}	code	uuidv4 code
     *	@returns {object}	operation result
     **/
    static async confirmEmail(code) {
        Log?.debug("UserLogic//confirmEmail");
        const notApp = notNode.Application;
        const OneTimeCode = notApp.getLogic("not-user//OneTimeCode");
        const oneTimeCode = await OneTimeCode.retrieveAndRedeemOTCFor(
            code,
            "confirmEmail"
        );
        const user = await UserLogic.loadUser(oneTimeCode.payload.owner);
        user.confirmEmail();
        await user.save();
    }

    static async profile({ activeUser }) {
        Log?.debug("UserLogic//profile");
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        let user = await User.getOne(activeUser._id);
        return User.clearFromUnsafe(user.toObject(), activeUser.role);
    }

    static checkUserSupremacy({ activeUser, targetUser, ip }) {
        Log?.debug("UserLogic//checkUserSupremacy");
        //если не владелец
        if (targetUser._id !== activeUser._id) {
            if (activeUser.isRoot() && !targetUser.isRoot()) {
                return;
            }
            const AuthLogic = notNode.Application.getLogic("not-user//Auth");
            //и не админ, а цель ниже по уровню
            if (!AuthLogic.userHaveSupremacy(activeUser, targetUser)) {
                //репортим попытку доступа к запрещенным данным
                throw new notRequestError(
                    phrase("insufficient_level_of_privilegies"),
                    {
                        code: 405,
                        error: phrase("insufficient_level_of_privilegies"),
                        params: {
                            ip,
                            activeUserId: activeUser._id,
                            activeUserRole: activeUser.role,
                            targetUserId: targetUser._id,
                            targetUserRole: targetUser.role,
                        },
                    }
                );
            }
        }
    }

    /**
     *	Update user document
     *	@param {ObjectId}							targetUserId  _id of user to update
     *	@param {MongooseDocument<User>}	activeUser  user that performs operation
     *	@param {Object}								data					delta changes
     *	@param {string} 							ip						performer IP
     *	@return {Promise<Object>}										standart result object with status field
     **/
    static async update({ targetUserId, activeUser, data, ip }) {
        Log?.debug("UserLogic//update");
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        let targetUser = await UserLogic.loadUser(targetUserId);
        UserLogic.checkUserSupremacy({
            activeUser,
            targetUser,
            ip,
        });
        //rights is ok
        await User.Update(
            {
                ...data,
                _id: targetUserId,
            },
            activeUser.role,
            activeUser._id
        );
        Log?.log({
            module: "user",
            logic: "User",
            action: "update",
            actorId: activeUser._id,
            actorRole: activeUser.role,
            targetId: targetUser._id,
            targetRole: targetUser.role,
        });
    }

    static async createUser({ activeUser, data, ip }) {
        Log?.debug("UserLogic//createUser");
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        let targetUser = await UserLogic.createNewUserDocument({
            ...data,
        });
        await notNode.Application.getLogic(LogicMailer).sendConfirmationEmail({
            user: targetUser,
        });
        Log?.log({
            module: "user",
            logic: "User",
            action: "createUser",
            actorId: activeUser._id,
            actorRole: activeUser.role,
            targetId: targetUser._id,
            targetRole: targetUser.role,
            ip,
        });
        return User.clearFromUnsafe(targetUser.toObject());
    }

    static async createRootUser(app, { username, email, password }) {
        Log?.debug("UserLogic//createRootUser");
        return await UserLogic.createNewUserDocument({
            username,
            email,
            password,
            emailConfirmed: true,
            role: ["root"],
            active: true,
        });
    }

    static async setRootPassword(notApp, { password }) {
        Log?.debug("UserLogic//setRootPassword");
        const User = notApp.getModel(MODEL_PATH);
        const rootUserDoc = await User.loadRoot();
        if (rootUserDoc) {
            rootUserDoc.password = password;
            await rootUserDoc.save();
            await User.saveVersion(rootUserDoc._id);
            return rootUserDoc;
        } else {
            throw new Error("Root user document not found");
        }
    }

    static checkAgainstSuicide({ targetUserId, activeUserId }) {
        if (targetUserId === activeUserId) {
            throw new notRequestError(
                phrase("user_cant_delete_his_own_account"),
                {
                    code: 403,
                    error: phrase("user_cant_delete_his_own_account"),
                }
            );
        }
    }

    static async delete({ targetUserId, ip, activeUser }) {
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        UserLogic.checkAgainstSuicide({
            targetUserId: targetUserId.toString(),
            activeUserId: activeUser._id.toString(),
        });
        const targetUser = await User.findOne({
            _id: targetUserId,
            __latest: true,
            __closed: false,
        }).exec();
        //if user exist, then mark current document version as closed
        if (targetUser) {
            UserLogic.checkUserSupremacy({
                activeUser,
                targetUser,
                ip,
            });
            await targetUser.close();
            Log?.log({
                module: "user",
                logic: "User",
                action: "createUser",
                actorId: activeUser._id,
                actorRole: activeUser.role,
                targetId: targetUser._id,
                targetRole: targetUser.role,
                ip,
            });
        }
    }

    static async get({ activeUser, targetUserId, ip }) {
        Log?.debug("UserLogic//get");
        const notApp = notNode.Application;
        const User = notApp.getModel(MODEL_PATH);
        const targetUser = await UserLogic.loadUser(targetUserId);
        //if user not quering his own info, check rights
        if (targetUserId.toString() !== activeUser._id.toString()) {
            UserLogic.checkUserSupremacy({
                activeUser,
                targetUser,
                ip,
            });
        }
        return User.clearFromUnsafe(targetUser.toObject());
    }
};
