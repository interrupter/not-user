const notNode = require("not-node");

function localLayoutPath(layout) {
    return resolve(__dirname, "../views", layout);
}

function getLayoutPath(layout) {
    const { Env } = notNode;
    const config = Env.getEnv("config");
    if (!config) {
        return localLayoutPath(layout);
    }
    const userOptions = config.get("modules.user");
    if (
        userOptions &&
        Object.hasOwn(userOptions, "layouts") &&
        Object.hasOwn(userOptions.layouts, layout)
    ) {
        return userOptions.layouts[layout];
    } else {
        return localLayoutPath(layout);
    }
}

function render(layout, opts) {
    res.render(getLayoutPath(layout), opts, (err, html) => {
        if (err) {
            notNode.Application.logger.error(["rendering error", err]);
            notNode.Application.report(
                new notError(
                    "rendering error",
                    {
                        ...opts,
                        session: req.session.id,
                    },
                    err
                )
            );
            res.status(500).end();
        } else {
            res.status(200).send(html).end();
        }
    });
}

exports.login = (req, res) => {
    try {
        notNode.Application.logger.debug(
            notNode.Auth.getIP(req) + " : " + req.originalUrl
        );
        if (req.originalUrl.indexOf("/api/") == 0) {
            return next();
        }
        if (req.user) {
            return res.redirect("/");
        } else {
            header.setForFile(res);
            let opts = getPageOptions(req, res);
            render("login", opts);
        }
    } catch (e) {
        let err = new notError("Login page generation error", {}, e);
        notNode.Application.logger.error(err);
        notNode.Application.report(err);
        res.status(500).end();
    }
};

exports.register = (req, res) => {
    try {
        notNode.Application.logger.debug(
            notNode.Auth.getIP(req) + " : " + req.originalUrl
        );
        if (req.originalUrl.indexOf("/api/") == 0) {
            return next();
        }
        if (req.user) {
            return res.redirect("/");
        } else {
            header.setForFile(res);
            let layout = "register";
            let opts = getPageOptions(req, res);
            res.render(layout, opts, (err, html) => {
                if (err) {
                    notNode.Application.logger.error(["rendering error", err]);
                    notNode.Application.report(
                        new notError(
                            "rendering error",
                            {
                                ...opts,
                                session: req.session.id,
                            },
                            err
                        )
                    );
                    res.status(500).end();
                } else {
                    res.status(200).send(html).end();
                }
            });
        }
    } catch (e) {
        let err = new notError("Registration page generation error", {}, e);
        notNode.Application.logger.error(err);
        notNode.Application.report(err);
        res.status(500).end();
    }
};
