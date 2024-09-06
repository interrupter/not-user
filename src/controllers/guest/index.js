import ncLogin from "./ncLogin.js";
import ncRegister from "./ncRegister.js";

let manifest = {
    router: {
        manifest: [
            {
                paths: ["login"],
                controller: ncLogin,
            },
            {
                paths: ["register"],
                controller: ncRegister,
            },
        ],
    },
};

export { ncLogin, ncRegister, manifest };
