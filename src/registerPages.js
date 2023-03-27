const notAppIdentity = require("not-node").notAppIdentity,
    pagesRoutes = require("./routes/pages");

module.exports = (web, config) => {
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
    if (!config.get("modules.user.restrict.registration")) {
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
