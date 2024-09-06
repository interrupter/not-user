import ncInit from "../../common/ncInit";

let manifest = {
    environment: "root",
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
