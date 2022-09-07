const notNode = require("not-node");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const Form = new (require('../forms/_newUserData'))();

module.exports = {
    model: {
        type: Schema.Types.Mixed,
        required: true,
        validate: [
            {
                validator(val) {
                    return notNode.Application.getForm(
                        "not-user//_newUserData"
                    ).run(val);
                },
                message: "newUserData_data_is_not_valid",
            },
        ],
    },
};
