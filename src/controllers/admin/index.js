import ncUser from "../root/ncUser.js";
import ncLogout from "../common/ncLogout.js";
import ncProfile from "../common/ncProfile.js";

let manifest = {
    router: {
        manifest: [
            {
                paths: ["logout"],
                controller: ncLogout,
            },
            ncUser.getRoutes(),
            {
                paths: ["profile"],
                controller: ncProfile,
            },
        ],
    },
    templates: {},
    paths: {},
    menu: {
        top: {
            sections: [
                {
                    id: "account",
                    title: "Аккаунт",
                    place: "end",
                },
            ],
            items: [
                {
                    id: "account.profile",
                    section: "account",
                    title: "Профиль",
                    href: "/profile",
                },
                {
                    id: "account.logout",
                    break: true,
                    section: "account",
                    priority: -100,
                    title: "Выход",
                    href: "/logout",
                },
            ],
        },
        side: {
            sections: [
                {
                    id: "system",
                    title: "Система",
                },
                {
                    id: "account",
                    title: "Аккаунт",
                    place: "end",
                },
            ],
            items: [
                {
                    id: "system.users",
                    section: "system",
                    title: "Пользователи",
                    href: "/user",
                },
                {
                    id: "account.profile",
                    section: "account",
                    title: "Профиль",
                    href: "/profile",
                },
                {
                    id: "account.logout",
                    break: true,
                    section: "account",
                    priority: -100,
                    title: "Выход",
                    href: "/logout",
                },
            ],
        },
    },
};

export { ncLogout, manifest };
