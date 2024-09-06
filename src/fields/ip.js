module.exports = {
    model: {
        type: String,
        required: false,
        safe: require("not-node/src/core/safety.protocols").systemManageable,
    },
};
