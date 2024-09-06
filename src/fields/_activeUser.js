const notNode = require("not-node");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
    model: {
        type: Schema.Types.Mixed,
        required: true,
        validate: [
            {
                validator(val) {
                    return notNode.Application.getForm(
                        "not-user//_activeUser"
                    ).run(val);
                },
                message: "activeUser_data_is_not_valid",
            },
        ],
    },
};
