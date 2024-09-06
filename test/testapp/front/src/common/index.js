import main from "./ws.client.main.js";

let manifest = {
    brand: {
        icon: {
            src: "",
            width: 48,
            height: 28,
        },
        title: "notUserTestApp",
        url: "/",
    },
    modules: {
        ws: {
            clients: {
                //options for ws client here
                main: {
                    host: `${window.location.hostname}:7358/`,
                    path: "",
                    secure: true,
                    ssl: false,
                },
            },
        },
    },
    crud: {
        containerSelector: ".main-container",
    },
};

const wsc = {
    main,
};

export { manifest, wsc };
