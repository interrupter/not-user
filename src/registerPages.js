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
};
