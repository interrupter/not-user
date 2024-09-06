import { Frame } from "not-bulma";

const { notSideMenu, notTopMenu, notController } = Frame;

class ncInit extends notController {
    constructor(app) {
        super(app);
        this.setModuleName("init");
        this.log("init app");
        notSideMenu.render(app);
        notTopMenu.render(app);
        return this;
    }
}

export default ncInit;
