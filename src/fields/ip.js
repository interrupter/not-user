module.exports = {
    parent: "not-node//ip",
    model: {
        type: String,
        required: false,
        safe: require("not-node/src/core/safety.protocols").systemManageable,
    },
};
