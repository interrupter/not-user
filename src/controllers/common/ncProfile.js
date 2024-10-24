import UserCommon from "../common/user.js";
import UserUIProfile from "../common/ui.profile.svelte";
import UserUIChangePassword from "../common/ui.change.password.svelte";

import { Frame, Elements } from "not-bulma";
import { mount } from "svelte";

const { notBreadcrumbs, notController, notCommon } = Frame;
const { UIError, UISuccess } = Elements.Notifications;

const MODULE_NAME = "";
const MODEL_NAME = "User";

const LABEL = "Профиль";

const BREADCRUMBS = [];

class ncProfile extends notController {
    constructor(app, params) {
        super(app, `User.Profile`);
        this.ui = {};
        this.els = {};
        super.setOptions(
            "containerSelector",
            super.app.getOptions("crud.containerSelector")
        );
        super.setModuleName(MODULE_NAME.toLowerCase());
        super.setModelName(MODEL_NAME.toLowerCase());
        super.setOptions("Validators", {});
        super.setOptions("params", params);
        this.buildFrame();
        this.start();
        return this;
    }

    start() {
        BREADCRUMBS.splice(0, BREADCRUMBS.length, {
            title: LABEL,
            url: notCommon.buildURL({
                prefix: super.getURLPrefix(),
                action: "profile",
            }),
        });
        notBreadcrumbs.setHead(BREADCRUMBS).render({
            root: "",
            target: this.els.top,
            navigate: (url) => super.app.getWorking("router").navigate(url),
        });
        this.route();
    }

    getModel() {
        return super.make[super.getModelName()];
    }

    setBreadcrumbs(tail) {
        notBreadcrumbs.setTail(tail).update();
    }

    backToList() {
        super.app.getWorking("router").navigate(this.linkBackToList());
    }

    afterAction(action = "list") {
        let navBack = super.app.getOptions("crud.navigateBackAfter", []);
        if (navBack && Array.isArray(navBack) && navBack.indexOf(action) > -1) {
            window.history.back();
        } else {
            this.backToList();
        }
    }

    linkBackToList() {
        return notCommon.buildURL({
            prefix: super.getURLPrefix(),
            action: "profile",
        });
    }

    buildFrame() {
        let el = document.querySelector(
            super.app.getOptions("crud.containerSelector", "body")
        );
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        this.els.top = document.createElement("div");
        this.els.top.id = "crud-top";
        this.els.top.classList.add("box");
        el.appendChild(this.els.top);
        this.els.main = document.createElement("div");
        this.els.main.id = "crud-main";
        this.els.main.classList.add("box");
        el.appendChild(this.els.main);
        this.els.bottom = document.createElement("div");
        this.els.bottom.id = "crud-bottom";
        this.els.bottom.classList.add("box");
        el.appendChild(this.els.bottom);
    }

    async preloadVariants() {
        try {
            const roles = await this.app
                .getModel("role")
                .$listAll()
                .then((res) => {
                    if (res.status === "ok") {
                        return res.result;
                    } else {
                        throw new Error(res.message);
                    }
                });
        } catch (e) {
            this.showErrorMessage(e);
        }
    }

    getItemTitle(item) {
        if (Object.hasOwn(item, "title") && typeof item.title === "string") {
            return item.title;
        } else if (
            Object.hasOwn(item, "label") &&
            typeof item.label === "string"
        ) {
            return item.label;
        } else if (Object.hasOwn(item, "id") && typeof item.id === "string") {
            return item.id;
        } else if (
            Object.hasOwn(item, "name") &&
            typeof item.name === "string"
        ) {
            return item.name;
        }
    }

    route() {
        return this.runDetails();
    }

    async runDetails() {
        try {
            await super.preloadVariants("details");
            this.setBreadcrumbs([
                {
                    title: "Просмотр",
                },
            ]);

            if (this.ui.details) {
                return;
            } else {
                this.$destroyUI();
            }

            let res = await this.getModel()({}).$profile();
            if (res.status === "ok") {
                this.ui.update = mount(UserUIProfile, {
                    target: this.els.main,
                    props: {
                        own: true,
                        mode: "profile",
                        user: notCommon.stripProxy(res.result),
                        rolesColorScheme: super.app.getOptions(
                            "modules.user.colorsOfRoles"
                        ),
                    },
                });
                this.ui.update.$on("goChangePassword", () => {
                    this.runChangePassword();
                });
                this.ui.update.$on("update", (ev) => {
                    this.onUserUpdateFormSubmit(ev.detail);
                });
                this.ui.update.$on("rejectForm", () =>
                    UserCommon.goDashboard()
                );
            } else {
                this.showErrorMessage(res);
            }
        } catch (e) {
            notCommon.report(e);
            this.showErrorMessage(e);
        }
    }

    runChangePassword() {
        try {
            this.setBreadcrumbs([
                {
                    title: "Изменение пароля",
                },
            ]);
            if (this.ui.changePassword) {
                return;
            } else {
                this.$destroyUI();
            }
            this.ui.changePassword = mount(UserUIChangePassword, {
                target: this.els.main,
                props: {},
            });
            this.ui.changePassword.$on("changePassword", (ev) => {
                this.onUserChangePassword({
                    ...ev.detail,
                });
            });
            this.ui.changePassword.$on("reject", () => this.goProfile());
        } catch (e) {
            this.showErrorMessage({
                error: e.message,
            });
        }
    }

    onUserChangePassword(data) {
        this.getModel()(data)
            .$changePassword()
            .then(this.ui.changePassword.showRequestResult.bind(this))
            .catch((e) => {
                this.showErrorMessage(e);
            });
    }

    $destroyUI() {
        for (let name in this.ui) {
            this.ui[name].$destroy && this.ui[name].$destroy();
            delete this.ui[name];
        }
    }

    showErrorMessage(res) {
        super.error(res);
        this.ui.error = new UIError({
            target: this.els.main,
            props: {
                title: "Произошла ошибка",
                message: res.message ? res.message : "unknown error",
            },
        });
    }

    showSuccessMessage(title, message) {
        this.ui.success = new UISuccess({
            target: this.els.main,
            props: {
                title,
                message,
            },
        });
    }

    onUserUpdateFormSubmit(user) {
        this.ui.update.setLoading();
        this.getModel()(user)
            .$update()
            .then((res) => {
                super.log(res);
                this.showResult(this.ui.update, res);
                if (!UserCommon.isError(res) && !res.error) {
                    setTimeout(() => this.goProfile(), 3000);
                }
                return true;
            })
            .catch((e) => {
                this.showResult(this.ui.update, e);
            });
    }

    showResult(ui, res) {
        ui.resetLoading();
        if (UserCommon.isError(res)) {
            notCommon.report(res);
        } else {
            if (res.errors && Object.keys(res.errors).length > 0) {
                if (!Array.isArray(res.error)) {
                    res.error = [];
                }
                Object.keys(res.errors).forEach((fieldName) => {
                    ui.setFieldInvalid(fieldName, res.errors[fieldName]);
                    res.error.push(...res.errors[fieldName]);
                });
            }
            if (res.error) {
                ui.setFormError(res.error);
            }
            if (!res.error) {
                ui.showSuccess();
            }
        }
    }

    goProfile() {
        this.$destroyUI();
        this.route();
    }
}

export default ncProfile;
