import { Frame, notCommon } from "not-bulma";
const { notForm } = Frame;

import ValidatorsLib from "../../common/validators.js";

export default class RegisterForm extends notForm {
    constructor({ data = {}, options = {} }) {
        options.action = "register";
        options.model = "user";
        super({
            name: "Register",
            options,
            data,
        });
        //events after user button actions
        this.on("onsubmit", (e) => this.onSubmit(e));
        this.on("onreject", () => {
            location.href = "/";
        });
        this.on("onsuccess", () => {
            location.href = "/dashboard";
            location.reload();
        });
    }

    getFormValidators() {
        return notCommon
            .getApp()
            .getService("nsUser")
            .augmentValidators(ValidatorsLib);
    }

    async onSubmit(data) {
        try {
            this.setLoading();
            const result = await this.getModel("user", data)[
                `$${this.getFormAction()}`
            ]();
            //maybe error or success
            this.processResult(result);
        } catch (e) {
            //if exactly error
            this.processResult(e);
        } finally {
            //should unlock UI anyway
            this.resetLoading();
        }
    }
}
