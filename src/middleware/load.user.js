const notNode = require("not-node");
const { notAppIdentity } = notNode;
const Log = require("not-log")(module, "User/middleware");
const { notError } = require("not-error");
const config = require("not-config").readerForModule("user");

module.exports = async (req, res, next) => {
    if (!req) next();
    const errors = config.get("errors");
    const debug = config.get("debug");
    const App = notNode.Application;
    const identity = new notAppIdentity(req);
    try {
        let User = App.getModel("User");
        req.user = res.locals.user = null;
        const userId = identity.getUserId();
        if (userId === null || typeof userId === "undefined") {
            if (errors && errors.noUserData) {
                Log.error(`no user data in session or token ${req.path}`);
            }
            return next();
        }
        let user = await User.loadSafe(userId);
        if (user) {
            if (debug && debug.loaded) {
                Log.debug(`User loaded ${user.username}`);
            }
            req.user = res.locals.user = user;
            identity.setRole(user.role);
        } else {
            if (errors && errors.noUserWithId) {
                Log.error(`No user with such id@${userId}`);
            }
            identity.cleanse();
        }
        return next();
    } catch (e) {
        Log.error(`Error while loading user information`);
        App.report(new notError(`Error while loading user information`, {}, e));
        identity.setGuest();
        next();
    }
};
