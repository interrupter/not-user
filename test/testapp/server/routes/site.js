const notError = require("not-error").notError,
    notNode = require("not-node");

const METAS_OVERRIDES = {
    title: "Reporterr",
    desription: "reporting tools for nodejs",
};

function getMetas(req, res) {
    const styler = notNode.notMetasStyler.get();
    return { ...styler(req, res), ...METAS_OVERRIDES };
}

module.exports.index = function (req, res, next) {
    notNode.Application.logger.debug(
        "index " + notNode.Auth.getIP(req) + " : " + req.originalUrl
    );
    if (req.originalUrl.indexOf("/api/") == 0) {
        return next();
    }
    notNode.notHeadersStyler.get()(req, res);
    const layout = "index";
    try {
        const metas = getMetas(req, res);
        res.render(layout, metas, (err, html) => {
            if (err) {
                notNode.Application.logger.error(["rendering error", err]);
                notNode.Application.report(
                    new notError(
                        "rendering error",
                        {
                            ...metas,
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
    } catch (e) {
        let err = new notError("Index page generation error", {}, e);
        notNode.Application.logger.error(err);
        notNode.Application.report(err);
        res.status(500).end();
    }
};

module.exports.dashboard = (req, res, next) => {
    try {
        notNode.Application.logger.debug(notNode.Auth.getIP(req), "dashboard");
        if (req.originalUrl.indexOf("/api/") == 0) {
            return next();
        }
        const layout = "dashboard";
        const metas = getMetas(req, res);
        res.render(layout, metas, (err, html) => {
            if (err) {
                notNode.Application.logger.error(["rendering error", err]);
                notNode.Application.report(
                    new notError(
                        "rendering error",
                        {
                            ...metas,
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
    } catch (e) {
        let err = new notError("Dashboard page generation error", {}, e);
        notNode.Application.logger.error(err);
        notNode.Application.report(err);
        res.status(500).end();
    }
};
