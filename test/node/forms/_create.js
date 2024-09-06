const notValidationError = require("not-error/src/validation.error.node.cjs");
const Form = new (require("../../../src/forms/create"))({ app: {} });

module.exports = ({ expect, stubRequest }) => {
    const testUser = {
        username: "test",
        email: "test@mail.com",
        emailConfirmed: true,
        created: Date.now,
        role: "root",
        active: true,
        country: "ru",
    };

    const newUser = {
        username: "new_one",
        email: "req.body.email",
        password: "req.body.password",
        role: "req.body.role",
        tel: "req.body.tel",
        country: "req.body.country",
        active: false,
    };

    describe("routes/user/_create", function () {
        it("ok", async () => {
            let req = stubRequest({
                params: {
                    _id: "_id_value",
                },
                user: testUser,
                body: newUser,
            });
            await Form.run(req, {}, () => {});
        });

        it("exception", async () => {
            let prepared = { some: "data" },
                req = stubRequest({
                    body: {
                        email: "register@mail.org",
                    },
                });
            try {
                await Form.run(
                    req,
                    {},
                    (err) => {
                        console.log(err);
                    },
                    prepared
                );
                throw new Error("wrong error");
            } catch (e) {
                expect(e).to.be.instanceof(notValidationError);
            }
        });
    });
};
