import ncInit from "../../common/ncInit";
import { notCommon } from "not-bulma";

let services = {},
    uis = {},
    wsc = {},
    fields = {};

import * as notUserCommon from "../../../../../../src/controllers/common/index";
import * as notUserGuest from "../../../../../../src/controllers/guest/index";

let manifest = {
    environment: "guest",
    router: {
        manifest: [],
    },
    crud: {
        containerSelector: ".main-container",
    },
    modules: {
        user: {
            loginFormContainerSelector: ".main-container",
            registerFormContainerSelector: ".main-container",
        },
    },
    initController: ncInit,
    menu: {
        top: {
            toggleSelector: ".navbar-burger",
            sections: [],
            items: [
                {
                    title: "Вход",
                    url: "/login",
                    priority: 10,
                    showOnTouch: true,
                    type: "button",
                    place: "start",
                },
                {
                    id: "register",
                    title: "Регистрация",
                    url: "/register",
                    type: "button",
                    priority: 11,
                    showOnTouch: true,
                    place: "start",
                },
            ],
        },
    },
};

manifest = notCommon.absorbModule({
    defaultConf: manifest,
    mod: notUserCommon,
    services,
    uis,
    wsc,
    fields,
});

manifest = notCommon.absorbModule({
    defaultConf: manifest,
    mod: notUserGuest,
    services,
    uis,
    wsc,
    fields,
});

export { ncInit, manifest, services, uis, wsc, fields };
