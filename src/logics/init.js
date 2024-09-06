const config = require("not-config").readerForModule("user");
const { error, info, debug } = require("not-log")(module, "not-user//logic");
const MODEL_NAME = "Init";

module.exports.thisLogicName = MODEL_NAME;

module.exports[MODEL_NAME] = class InitLogic {
    static getInitialRootValues() {
        const rootUserConfig = config.get("root");
        const root = {};
        if (rootUserConfig) {
            rootUserConfig.username &&
                (root.username = rootUserConfig.username);
            rootUserConfig.email && (root.email = rootUserConfig.email);
            rootUserConfig.password &&
                (root.password = rootUserConfig.password);
        }
        if (process.env.INIT_ROOT_USERNAME) {
            root.username = process.env.INIT_ROOT_USERNAME;
        }
        if (process.env.INIT_ROOT_EMAIL) {
            root.email = process.env.INIT_ROOT_EMAIL;
        }
        if (process.env.INIT_ROOT_PASSWORD) {
            root.password = process.env.INIT_ROOT_PASSWORD;
        }
        return root;
    }

    static resetOfRootPasswordNeeded() {
        return process.env.RESET_ROOT_PASSWORD;
    }

    static async createRootUser(app) {
        info(`Installing...`);
        return await app
            .getLogic("not-user//User")
            .createRootUser(app, InitLogic.getInitialRootValues());
    }

    static async resetRootPassword(app) {
        info(`Resetting root password...`);
        return await app
            .getLogic("not-user//User")
            .setRootPassword(app, InitLogic.getInitialRootValues());
    }

    static async initialize(app /*, master*/) {
        try {
            let User = app.getModel("not-user//User");
            info("checking if not-user has been installed");
            const user = await User.findOne({
                role: "root",
                __latest: true,
                __closed: false,
            });
            if (user) {
                debug(`Root user exists!`);
                if (this.resetOfRootPasswordNeeded()) {
                    const newRoot = await this.resetRootPassword(app);
                    info(`Root reset to ${newRoot.email}`);
                }
                return;
            } else {
                debug("Root user doesnt exists!");
                const root = await InitLogic.createRootUser(app);
                info(`Installed ${root.userID}#${root.username}`);
                return root;
            }
        } catch (e) {
            error("While searching for root user in DB!");
            error(e);
            app.report(e);
        }
    }
};
