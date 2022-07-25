import { Builder } from "not-validation";
import Validator from "validator";

import UIGenericSelector from "not-bulma/src/elements/modal/ui.generic.selector.svelte";

const emptyResult = () => {
    return {
        list: [],
        count: 0,
        page: 0,
        pages: 0,
        skip: 0,
    };
};

export default class nsUser {
    constructor(app) {
        this.app = app;
    }

    destroy() {
        delete this.app;
    }

    augmentValidators(validators) {
        return Builder(validators, () => this.getValidatorEnv());
    }

    getValidatorEnv() {
        return {
            config: this.app.getConfigReaderForModule("user"),
            validator: Validator,
        };
    }

    async searchUserByTerm(term) {
        try {
            if (term.value.length > 2) {
                const model = this.app.getModel("user");
                model.setSearch(term.value);
                const response = await model.$listAndCount();
                if (response.status === "ok") {
                    response.result.list = response.result.list.map((item) => {
                        return {
                            _id: item._id,
                            id: item.userID,
                            title: item.username,
                        };
                    });
                    return response.result;
                } else {
                    return emptyResult();
                }
            } else {
                return emptyResult();
            }
        } catch (e) {
            return emptyResult();
        }
    }

    openSelector() {
        return new Promise((resolve, reject) => {
            try {
                const el = new UIGenericSelector({
                    target: document.body,
                    props: {},
                });
                el.$on("termChange", async ({ detail }) => {
                    const results = await this.searchUserByTerm(detail);
                    el.$set({ results });
                });

                el.$on("next", () => {
                    console.log("next");
                });

                el.$on("prev", () => {
                    console.log("prev");
                });

                el.$on("reject", () => {
                    console.log("reject");
                    el.$destroy();
                    reject();
                });
                el.$on("resolve", ({ detail }) => {
                    console.log("resolve");
                    el.$destroy();
                    resolve({
                        _id: detail._id,
                        userID: detail.id,
                        username: detail.title,
                    });
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    async loadUserData(_id) {
        try {
            if (_id && _id.length > 10) {
                const model = this.app.getModel("user", { _id });
                const response = await model.$get();
                if (response.status === "ok") {
                    return response.result;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
