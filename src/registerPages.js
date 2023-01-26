const Auth = require("not-node").Auth,
    pagesRoutes = require("./routes/pages");

module.exports = (web) => {
    web.get(
        "/login",
        (req, res, next) => {
            if (Auth.isUser(req)) {
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
            if (Auth.isUser(req)) {
                res.redirect("/");
            } else {
                next();
            }
        },
        pagesRoutes.register
    );
};
