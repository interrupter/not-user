const log = require("not-log")(module, "not-user//init//identityTokens");
const {
    ExceptionIdentityTokensSecretIsEmpty,
    ExceptionIdentityTokensSecretIsTooShort,
} = require("../exceptions");
const { TOKEN_TTL, TOKEN_SECRET_LENGTH } = require("../const");
const notAppIdentity = require("not-node");

module.exports = class InitIdentityTokens {
    static loadConfig({ config }) {
        let val = config.get("modules.user");
        if (!val || !val.secret || !(typeof val.secret === "string")) {
            throw new ExceptionIdentityTokensSecretIsEmpty();
        }
        if (val.secret.length < TOKEN_SECRET_LENGTH) {
            throw new ExceptionIdentityTokensSecretIsTooShort({
                secret: val.length,
                min: TOKEN_SECRET_LENGTH,
            });
        }
        return { secret: val.secret, ttl: val.tokenTTL ?? TOKEN_TTL };
    }

    async run({ config, options, master, emit }) {
        const input = InitIdentityTokens.loadConfig({ config });
        log.info("Setting up identity tokens");
        await emit("tokens.pre", { config, options, master, input });
        notAppIdentity.identity.setProviderOptions("token", input);
        await emit("tokens.post", { config, options, master });
    }
};
