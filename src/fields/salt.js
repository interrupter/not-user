//соль для хэширования

module.exports = {
    model: {
        type: String,
        required: true,
        safe: require("not-node/src/core/safety.protocols")
            .systemManageableSecret,
    },
};
