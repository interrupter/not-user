import { Frame } from "not-bulma";

const { notController } = Frame;

/**
 *
 *
 * @class ncLogout
 * @extends {notController}
 */
class ncLogout extends notController {
    constructor(app) {
        super(app, "User.logout");
        super.setModelName("user");
        if (confirm("Хотите выйти?")) {
            super.make
                .user({})
                .$logout()
                .then(() => {
                    app.emit("user.logout");
                    document.location.href = "/login";
                    document.location.reload();
                    return true;
                })
                .catch((err) => {
                    super.report(err);
                });
        } else {
            window.history.back();
        }
        return this;
    }
}

export default ncLogout;
