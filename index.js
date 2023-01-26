const path = require("path"),
    notNode = require("not-node"),
    registerPages = require("./src/registerPages");

const loadUserMiddleware = require("./src/middleware/load.user");
const InitIdentityTokens = require("./src/init/tokens");

const content = [
    "fields",
    "forms",
    "routes",
    "logics",
    "controllers",
    "models",
    "views",
    "styles",
    "locales",
];

const toPath = (name) => path.join(__dirname, "src", name);
const paths = content.reduce((prev, cur) => {
    prev[cur] = toPath(cur);
    return prev;
}, {});

module.exports = {
    name: require("./src/const").MODULE_NAME,
    paths,
    getMiddleware() {
        const App = notNode.Application;
        App.logger.info("...loadUser middleware");
        return loadUserMiddleware.bind(this);
    },
    initialize: async (app, master) => {
        const App = notNode.Application;
        App.logger.info("...initalizing");
        await app.getLogic("not-user//Init").initialize(app);
    },
    registerPagesRoutes: async (app, master) => {
        try {
            App.logger.info("...registering not-user pages routes");
            await registerPages(master.getServer());
        } catch (e) {
            App.logger.error(e);
            app.report(e);
        }
    },
    InitIdentityTokens,
};
