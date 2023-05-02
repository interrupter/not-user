import Validators from "../common/validators.js";
import { ROLES_NOT_SELECTABLE } from "../../const.js";

import { Frame } from "not-bulma";

const { notCRUD } = Frame;

const MODULE_NAME = "";
const MODEL_NAME = "User";

const LABELS = {
    plural: "Пользователи",
    single: "Пользователь",
};

class ncUser extends notCRUD {
    static MODULE_NAME = MODULE_NAME;
    static MODEL_NAME = MODEL_NAME;

    constructor(app, params) {
        super(app, `${MODULE_NAME}.${MODEL_NAME}`);
        this.setModuleName(MODULE_NAME.toLowerCase());
        this.setModelName(MODEL_NAME.toLowerCase());
        this.setOptions("names", LABELS);
        this.setOptions(
            "Validators",
            app.getService("nsUser").augmentValidators(Validators)
        );
        this.setOptions("params", params);

        this.setOptions("update", {
            actionName: "get",
            options: {
                fields: {
                    email: {
                        readonly: true,
                        disabled: true,
                    },
                    username: {
                        readonly: true,
                        disabled: true,
                    },
                },
            },
        });

        this.setOptions("list", {
            interface: {
                combined: true,
                factory: this.make.user,
            },
            endless: false,
            sorter: {
                userID: -1,
            },
            actions: [],
            showSearch: true,
            idField: "_id",
            fields: [
                {
                    path: ":userID",
                    title: "ID",
                    searchable: true,
                    sortable: true,
                },
                {
                    path: ":username",
                    title: "Username",
                    searchable: true,
                    sortable: true,
                },
                {
                    path: ":email",
                    title: "Email",
                    searchable: true,
                    sortable: true,
                    hideOnMobile: true,
                },
                {
                    path: ":emailConfirmed",
                    title: "Подтверждён",
                    type: "boolean",
                    hideOnMobile: true,
                    preprocessor: (value) => [{ value }],
                },
                {
                    path: ":role",
                    title: "Роли",
                    preprocessor: (value) => {
                        if (Array.isArray(value)) {
                            return value.join(", ");
                        } else {
                            return value;
                        }
                    },
                },
                {
                    path: ":_id",
                    title: "Действия",
                    type: "button",
                    preprocessor: (value) => {
                        return [
                            {
                                action: this.goDetails.bind(this, value),
                                title: "Подробнее",
                                size: "small",
                            },
                            {
                                action: this.goUpdate.bind(this, value),
                                title: "Изменить",
                                size: "small",
                            },
                            {
                                action: this.goDelete.bind(this, value),
                                type: "danger",
                                title: "Удалить",
                                size: "small",
                                style: "outlined",
                            },
                        ];
                    },
                },
            ],
        });

        this.preloadRoles()
            .then(() => this.start())
            .catch(this.report);

        return this;
    }

    getItemTitle(itm) {
        return `${itm.userID}#${itm.username}`;
    }

    rolesListsToVariants(roles) {
        const rolesVariants = [
            ...roles.primary.map((name) => {
                return {
                    id: name,
                    title: name,
                    type: "warning",
                    notSelectable: ROLES_NOT_SELECTABLE.includes(name)
                };
            }),
            ...roles.secondary.map((name) => {
                return {
                    id: name,
                    title: name,
                    type: "info",
                    notSelectable: ROLES_NOT_SELECTABLE.includes(name)
                };
            }),
        ];
        return rolesVariants;
    }

    async loadRolesFromServer() {
        let results = await this.make.role({}).$listAll();
        if (results.status === "ok") {
            const roles = results.result;
            this.app.setOptions("modules.user.roles", roles);
        } else {
            throw new Error(results.message);
        }
    }

    async preloadRoles() {
        try {
            let roles = this.app.getOptions("modules.user.roles");
            if (!roles) {
                await this.loadRolesFromServer();
            }
            roles = this.app.getOptions("modules.user.roles");
            const rolesVariants = this.rolesListsToVariants(roles);
            this.setOptions(`variants.update`, { role: rolesVariants });
            this.setOptions(`variants.create`, { role: rolesVariants });
            this.setOptions(`variants.details`, { role: rolesVariants });
        } catch (e) {
            this.report(e);
        }
    }

    createDefault() {
        return {
            username: "",
            email: "",
            telephone: "",
            password: "",
            active: true,
            country: "ru",
            role: ["user"],
        };
    }
}

export default ncUser;
