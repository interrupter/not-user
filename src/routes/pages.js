const { MODULE_NAME, DEFAULT_COLORS } = require("../const");
const notNode = require("not-node");
const { notError } = require("not-error");
const { resolve } = require("path");

const config = require("not-config").forModule(MODULE_NAME);

function localLayoutPath(layout) {
    return resolve(__dirname, "../views", layout);
}

function getColors() {
    let colors = { ...DEFAULT_COLORS };
    if (config.get("styling.colors.main")) {
        colors.mainBackgroundColor = config.get("styling.colors.main");
    }
    if (config.get("styling.colors.secondary")) {
        colors.secondaryBackgroundColor = config.get(
            "styling.colors.secondary"
        );
    }
    return colors;
}

function getLayoutPath(layout) {
    if (!config) {
        return localLayoutPath(layout);
    }
    const userLayouts = config.get("layouts");
    if (userLayouts && Object.hasOwn(userLayouts, layout)) {
        return userLayouts[layout];
    } else {
        return localLayoutPath(layout);
    }
}

function render(req, res, layout, opts) {
    res.render(getLayoutPath(layout), opts, (err, html) => {
        if (err) {
            notNode.Application.logger.error(["rendering error", err]);
            notNode.Application.report(
                new notError(
                    "rendering error",
                    {
                        ...getColors(),
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
            notNode.notHeadersStyler.get()(req, res);
            let opts = notNode.notMetasStyler.get()(req, res);
            render(req, res, "login", opts);
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
            notNode.notHeadersStyler.get()(req, res);
            const layout = "register";
            let opts = notNode.notMetasStyler.get()(req, res);
            render(req, res, layout, opts);
        }
    } catch (e) {
        let err = new notError("Registration page generation error", {}, e);
        notNode.Application.logger.error(err);
        notNode.Application.report(err);
        res.status(500).end();
    }
};
