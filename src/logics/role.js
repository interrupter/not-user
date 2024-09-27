const {
    DEFAULT_ROLES_LIST,
    EXTRA_ROLES_LIST,
    MODULE_NAME,
} = require("../const");
const Log = require("not-log")(module, "role:logics");
const config = require("not-config").forModule(MODULE_NAME.split("-")[1]);

const MODEL_NAME = "Role";
module.exports.thisLogicName = MODEL_NAME;

module.exports[MODEL_NAME] = class RoleLogic {
    static async listAll() {
        Log?.debug("RoleLogic//listAll");
        const ROLES_PRIMARY = config.get("roles.primary") || DEFAULT_ROLES_LIST;
        const ROLES_SECONDARY =
            config.get("roles.secondary") || EXTRA_ROLES_LIST;
        return {
            primary: ROLES_PRIMARY,
            secondary: ROLES_SECONDARY,
        };
    }
};
