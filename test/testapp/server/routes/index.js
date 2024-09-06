const { notAppIdentity } = require("not-node"),
    siteRouter = require("./site");

module.exports = (app, notApp) => {
    //можно запросить манифест для клиент-серверного обмена
    app.get("/api/manifest", function (req, res) {
        res.header(
            "Cache-Control",
            "private, no-cache, no-store, must-revalidate"
        );
        res.header("Expires", "-1");
        res.header("Pragma", "no-cache");
        res.json(notApp.getManifest(req));
    });

    app.get(
        "/",
        (req, res, next) => {
            if (new notAppIdentity(req).isUser()) {
                res.redirect("/dashboard");
            } else {
                next();
            }
        },
        siteRouter.index
    );

    app.get(
        "/dashboard*",
        (req, res, next) => {
            if (new notAppIdentity(req).isUser()) {
                next();
            } else {
                res.redirect("/login");
            }
        },
        siteRouter.dashboard
    );

    app.get("/__coverage__", (req, res) => {
        res.status(200).json({ coverage: global.__coverage__ });
    });
};
