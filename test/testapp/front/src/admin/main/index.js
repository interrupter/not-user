import ncInit from "../../common/ncInit";

let manifest = {
    environment: "admin",
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
};

export { ncInit, manifest };
