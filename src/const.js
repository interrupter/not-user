const MODULE_NAME = 'not-user';
exports.MODULE_NAME = MODULE_NAME;

const DEFAULT_TTL = 3; //in minutes
const DEFAULT_TTL_MIN = 1; //in minutes
const DEFAULT_TTL_MAX = 60; //in minutes

exports.DEFAULT_TTL = DEFAULT_TTL;
exports.DEFAULT_TTL_MIN = DEFAULT_TTL_MIN;
exports.DEFAULT_TTL_MAX = DEFAULT_TTL_MAX;

//stronger -> weaker
const DEFAULT_ROLES_LIST = ['root', 'admin', 'client', 'user', 'guest'];
exports.DEFAULT_ROLES_LIST = DEFAULT_ROLES_LIST;

const EXTRA_ROLES_LIST = ['confirmed'];
exports.EXTRA_ROLES_LIST = EXTRA_ROLES_LIST;

exports.DEFAULT_HASH_ALGO = 'sha256';
