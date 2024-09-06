const notNode = require("not-node");
/*
notNode.Fields.importFromDir(
    __dirname + "/../../node_modules/not-node/src/core/fields"
);
notNode.Fields.importFromDir(__dirname + "/../../src/fields");
*/

const Increment = notNode.Increment,
    Proto = require("not-node").Proto,
    OneTimeCode = require("not-one-time-code/src/models/oneTimeCode"),
    User = require("../../src/models/user.js"),
    mongoose = require("mongoose"),
    MongoMemoryServer = require("mongodb-memory-server").MongoMemoryServer;

let connecting = false;
let onConnected = [];
let connected = false;
mongoose.Promise = Promise;

exports.init = (from, done) => {
    if (connected) {
        done();
    }
    if (connecting) {
        onConnected.push(done);
        return;
    }
    console.log(from, "connecting...");
    connecting = true;
    MongoMemoryServer.create()
        .then((mongoServer) => {
            exports.mongoServer = mongoServer;
            return mongoServer.getUri();
        })
        .then((mongoUri) => {
            return mongoose.connect(mongoUri);
        })
        .then(() => {
            console.log(from, "connected");
            connecting = false;
            connected = true;
            //console.log(notNode.Fields.LIB);
            if (typeof User.User == "undefined") {
                Proto.fabricate(User, {}, mongoose);
            }
            if (typeof OneTimeCode.OneTimeCode == "undefined") {
                Proto.fabricate(OneTimeCode, {}, mongoose);
            }
            Increment.init(mongoose);
            onConnected.forEach((f) => f());
            done();
        })
        .catch((e) => {
            done(e);
        });
};

exports.mongoose = mongoose;

exports.destroy = async (from, done) => {
    try {
        await mongoose.disconnect();
        await exports.mongoServer.stop();
        connected = false;
        console.log("Server stopped in ", from);
        done();
    } catch (e) {
        console.error("Server stop errored ", e);
        connected = false;
        done();
    }
};
