import { notCommon } from "not-bulma";
const logger = notCommon.createLogger(`WSClient(main)`);

const main = {
    logger: logger,
    getToken: () => {
        return notCommon
            .getApp()
            .getModel("user", {})
            .$token({})
            .then((res) => {
                notCommon.getApp().setWorking("token", res.result);
                return res.result;
            });
    },
    messenger: {
        validateTypeAndName: false,
        secure: false, //not secure, bc its not issuing tokens and has no secret key
        types: {
            __service: ["updateToken"],
            request: [],
            response: [],
            event: [],
        },
    },
    router: {
        routes: {
            event: {
                notification() {
                    console.log(...arguments);
                },
            },
        },
    },
};

export default main;
