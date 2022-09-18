const MODULE_NAME = "not-user";
module.exports.MODULE_NAME = MODULE_NAME;

const DEFAULT_TTL = 3; //in minutes
const DEFAULT_TTL_MIN = 1; //in minutes
const DEFAULT_TTL_MAX = 60; //in minutes

module.exports.DEFAULT_TTL = DEFAULT_TTL;
module.exports.DEFAULT_TTL_MIN = DEFAULT_TTL_MIN;
module.exports.DEFAULT_TTL_MAX = DEFAULT_TTL_MAX;

//stronger -> weaker
const DEFAULT_ROLES_LIST = ["root", "admin", "client", "user", "guest"];
module.exports.DEFAULT_ROLES_LIST = DEFAULT_ROLES_LIST;

const EXTRA_ROLES_LIST = ["confirmed"];
module.exports.EXTRA_ROLES_LIST = EXTRA_ROLES_LIST;

module.exports.DEFAULT_HASH_ALGO = "sha256";

//TOKEN IDENTITY
const TOKEN_TTL = 3600;
module.exports.TOKEN_TTL = TOKEN_TTL;
const TOKEN_SECRET_LENGTH = 20;
module.exports.TOKEN_SECRET_LENGTH = TOKEN_SECRET_LENGTH;
