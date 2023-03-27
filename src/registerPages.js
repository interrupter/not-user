const { MODULE_NAME } = require("./const");
const config = require("not-config").forModule(MODULE_NAME);
const notAppIdentity = require("not-node").notAppIdentity,
    pagesRoutes = require("./routes/pages");

module.exports = (web) => {
    web.get(
        "/login",
        (req, res, next) => {
            if (new notAppIdentity(req).isUser()) {
                res.redirect("/");
            } else {
                next();
            }
        },
        pagesRoutes.login
    );
    if (!config.get("restrict.registration")) {
        web.get(
            "/register",
            (req, res, next) => {
                if (new notAppIdentity(req).isUser()) {
                    res.redirect("/");
                } else {
                    next();
                }
            },
            pagesRoutes.register
        );
    }
};
