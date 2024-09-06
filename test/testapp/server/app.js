const notNode = require("not-node"),
    Init = require("not-node").Init,
    { info } = require("not-log")(module, "app"),
    InitIdentityTokens = require("../../../src/init/tokens.js"),
    path = require("path"),
    manifest = {
        name: "test",
        targets: {
            server: {
                roles: ["root", "admin", "client", "user", "guest"],
            },
        },
    },
    { MongoMemoryServer } = require("mongodb-memory-server");

module.exports = () => {
    const additional = {
        pre({ initSequence }) {
            initSequence.remove("InitMonitoring");
            initSequence.insert(InitIdentityTokens);
        },
        db: {
            mongoose: {
                pre: async ({ conf }) => {
                    info("Starting MongoMemoryServer");
                    let mongoServer = await MongoMemoryServer.create({
                        binary: { version: "5.0.4" },
                    });
                    conf.uri = mongoServer.getUri();
                },
            },
        },
        app: {
            importModules: {
                pre: async ({ master }) => {
                    require("@cypress/code-coverage/middleware/express")(
                        master.getServer()
                    );
                },
                post: async ({ config, options, master }) => {
                    const pathToUserModule = path.join(__dirname, "../../../");
                    config.set("middleware.not-user.path", pathToUserModule);
                    console.log("Importing USER module:", pathToUserModule);
                    master
                        .getApp()
                        .importModuleFrom(
                            path.join(__dirname, "../../../"),
                            "not-user"
                        );
                },
            },
        },
        async post() {
            info("post app init");
            let User = notNode.Application.getModel("User");
            let user = await User.add({
                username: "VasyaPupkin",
                email: "vasya@pupkin.hacker",
                password: "password",
                ip: "127.0.0.1",
                telephone: "+1-234-234-2345",
            });
            user.confirmEmail();
            await user.save();
            info(`added user ${user.userID}#${user.username}`);
        },
    };

    const options = {
        pathToApp: path.join(__dirname),
        pathToNPM: path.join(__dirname, "../../../node_modules"),
        routesPath: path.join(__dirname, "./routes"),
        indexRoute: require("./routes/site.js").index,
    };

    Init.run({
        options,
        manifest,
        additional,
    });
};
