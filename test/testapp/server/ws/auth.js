const Log = require("not-log")(module, "WS::Auth");
const notNode = require("not-node");
const ObjectId = require("mongoose").Types.ObjectId;

function isRoot(token) {
    return token.role ? token.role.indexOf("root") > -1 : false;
}

function isAuth(_id) {
    try {
        return !!new ObjectId(_id);
    } catch (e) {
        return false;
    }
}

module.exports = ({ serviceData, cred }) => {
    //Log.log(serviceData, cred);
    const [model, action] = serviceData.name.split("//");
    //Log.log(model, action);
    let user = {
        auth: isAuth(cred._id),
        role: cred.role,
        root: isRoot(cred),
        username: cred.username,
        email: cred.email,
        emailConfirmed: cred.emailConfirmed,
    };
    //Log.log(user);
    let actionManifest = notNode.Application.getActionManifestForUser(
        model,
        action,
        user
    );
    Log.log(model, action, user.username, user.role, !!actionManifest);
    if (actionManifest) {
        return true;
    } else {
        return false;
    }
};
