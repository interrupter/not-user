import { Frame } from "not-bulma";
const { notController, notFormSet } = Frame;

class ncFormFrame extends notController {
    #formSet = null;
    constructor({ app, name, mode }) {
        super(app, `${name}Form`);
        this.setModelName("user");
        this.buildFrame(mode);
        return this;
    }

    buildFrame(mode) {
        const target = this.getTargetContainer();
        if (!target) {
            location.href = this.getMainURL();
        }
        this.#formSet = new notFormSet({
            options: {
                name: this.getWorking("name"),
                target,
                mode: mode,
                forms: this.getFormsSet(),
            },
        });
    }
}

export default ncFormFrame;
