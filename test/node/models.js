require("not-log").muted = true;

const expect = require("chai").expect,
    notError = require("not-error").notError,
    path = require("path"),
    crypto = require("crypto"),
    notLocale = require("not-locale"),
    localDB = require("./db.js"),
    User = require("../../src/models/user.js");

describe("models/user", function () {
    before((done) => {
        localDB.init("models", done);
    });

    after((done) => {
        localDB.destroy("models", done);
    });

    describe("models/user - localy isolated in mockup without actually querying MongoDB", function () {
        before(function (done) {
            notLocale.fromDir(path.join(__dirname, "../../src/locales"));
            done();
        });

        describe("methods", function () {
            it("isRole", () => {
                User.thisMethods.role = ["root"];
                expect(User.thisMethods.isRole("role")).to.be.false;
                expect(User.thisMethods.isRole("root")).to.be.true;
                expect(User.thisMethods.isRoot()).to.be.true;
                expect(User.thisMethods.isAdmin()).to.be.false;
                expect(User.thisMethods.isClient()).to.be.false;
                expect(User.thisMethods.isUser()).to.be.false;
            });

            it("encryptPassword", () => {
                let str1 = "qwerty_password",
                    str2 = "salty_jelly_fish",
                    str3 = crypto
                        .createHmac("sha256", str2)
                        .update(str1)
                        .digest("hex");
                User.thisMethods.salt = str2;
                expect(User.thisMethods.encryptPassword(str1)).to.be.equal(
                    str3
                );
            });

            it("checkPassword", () => {
                let str1 = "qwerty_password",
                    str2 = "salty_jelly_fish",
                    str3 = crypto
                        .createHmac("sha256", str2)
                        .update(str1)
                        .digest("hex");
                User.thisMethods.salt = str2;
                User.thisMethods.hashedPassword = str3;
                expect(User.thisMethods.checkPassword(str1)).to.be.ok;
                expect(User.thisMethods.checkPassword(str1 + "1")).to.be.false;
                expect(User.thisMethods.checkPassword("")).to.be.false;
                expect(User.thisMethods.checkPassword(false)).to.false;
                expect(User.thisMethods.checkPassword(true)).to.be.false;
                expect(User.thisMethods.checkPassword(null)).to.be.false;
                expect(User.thisMethods.checkPassword(undefined)).to.be.false;
            });
            it("registerAs", () => {
                User.thisMethods.save = () => {};
                User.thisMethods.role = [];
                let role = "root";
                expect(User.thisMethods.registerAs(role)).to.be.deep.equal(
                    User.thisMethods
                );
                expect(User.thisMethods.registerAs(role)).to.be.deep.equal(
                    User.thisMethods
                );
                expect(User.thisMethods.role).to.be.deep.equal([role]);
            });

            it("deregisterAs", () => {
                User.thisMethods.save = () => {};
                User.thisMethods.role = ["root"];
                let role = "root";
                expect(User.thisMethods.deregisterAs(role)).to.be.deep.equal(
                    User.thisMethods
                );
                expect(User.thisMethods.role).to.be.deep.equal([]);
                expect(User.thisMethods.deregisterAs(role));
                expect(User.thisMethods.role).to.be.deep.equal([]);
            });

            it("confirmEmail", () => {
                expect(User.thisMethods.confirmEmail()).to.be.deep.equal(
                    User.thisMethods
                );
                expect(User.thisMethods.emailConfirmed).to.be.ok;
                expect(User.thisMethods.confirm).to.be.equal("");
                expect(User.thisMethods.role).to.be.include("confirmed");
            });
        });

        describe("authorize", function () {
            it("adding user", (done) => {
                User.User.add({
                    email: "test@email.com",
                    username: "testUser",
                    emailConfirmed: false,
                    password: "qwerty",
                })
                    .then((user) => {
                        expect(user.active).to.be.true;
                        expect(user.emailConfirmed).to.be.false;
                        expect(user.role).to.be.deep.equal(["user"]);
                        done();
                    })
                    .catch(done);
            });

            it("changing user password", (done) => {
                User.User.add({
                    email: "test22@email.com",
                    username: "testUser22",
                    emailConfirmed: false,
                    password: "qwerty22",
                })
                    .then(async (user) => {
                        expect(user.active).to.be.true;
                        expect(user.emailConfirmed).to.be.false;
                        expect(user.role).to.be.deep.equal(["user"]);
                        let oldHash = user.hashedPassword;
                        let oldSalt = user.salt;
                        user.password = "toasttoast";
                        expect(user.password).to.be.deep.equal("toasttoast");
                        expect(oldHash).to.be.not.equal(user.hashedPassword);
                        expect(oldSalt).to.be.not.equal(user.salt);
                        let newUesr = await user.save();
                        return newUesr;
                    })
                    .then((user) => {
                        User.User.authorize("test22@email.com", "toasttoast")
                            .then((user) => {
                                expect(user.username).to.be.equal("testUser22");
                                done();
                            })
                            .catch((e) => {
                                done(e);
                            });
                    })
                    .catch((e) => {
                        done(e);
                    });
            });

            it("throw", async () => {
                try {
                    await User.User.authorize({
                        leg: ["email", "password"],
                    });
                    throw new Error("wrong path");
                } catch (err) {
                    expect(err).to.be.instanceof(notError);
                    expect(err.message).to.be.equal("not-user:email_not_valid");
                }
            });

            it("undefined", async () => {
                try {
                    await User.User.authorize("email", "password");
                    throw new Error("wrong path");
                } catch (err) {
                    expect(err).to.be.instanceof(notError);
                    expect(err.message).to.be.equal("not-user:email_not_valid");
                }
            });

            it("user exists, wrong pass", async () => {
                try {
                    await User.User.authorize("test@email.com", "password");
                    throw new Error("wrong path");
                } catch (err) {
                    expect(err).to.be.instanceof(notError);
                    expect(err.message).to.be.equal(
                        "not-user:password_incorrect"
                    );
                }
            });

            it("user exists, pass is correct", (done) => {
                User.User.authorize("test@email.com", "qwerty")
                    .then((user) => {
                        expect(user.active).to.be.true;
                        done();
                    })
                    .catch((err) => {
                        expect(false).to.be.true;
                        done(err);
                    });
            });
        });

        describe("toggleActive", function () {
            it("item exists and has `active` field", async () => {
                let user = await User.User.add({
                    email: "tester@email.com",
                    username: "testerUser",
                    emailConfirmed: false,
                    password: "qwertyStory",
                });
                let userAfter = await User.User.toggleActive(user._id);
                expect(userAfter.active).to.be.false;
            });

            it("item does exists", (done) => {
                User.User.toggleActive("5cb41aa82c821a441c1ded21")
                    .then(() => {
                        expect(false).to.be.true;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(notError);
                        done();
                    });
            });

            it("throw", (done) => {
                User.User.toggleActive({
                    leg: "5cb41aa82c821a441c1ded21",
                })
                    .then(() => {
                        expect(false).to.be.true;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(notError);
                        done();
                    });
            });
        });
        describe("clearFromUnsafe", function () {
            it("check", () => {
                let item = {
                    hashedPassword: "1",
                    salt: "2",
                };
                let cleared = User.User.clearFromUnsafe(item);
                expect(cleared).to.not.have.property("hashedPassword");
                expect(cleared).to.not.have.property("salt");
            });
        });

        describe("fieldValueExists", function () {
            it("exists", function (done) {
                User.User.add({
                    email: "tester312@email.com",
                    username: "testerUser312",
                    emailConfirmed: false,
                    password: "qwertyStory",
                })
                    .then(() => {
                        User.User.fieldValueExists("username", "testerUser312")
                            .then((result) => {
                                expect(result).to.be.true;
                                done();
                            })
                            .catch((err) => {
                                done(err);
                            });
                    })
                    .catch(done);
            });

            it("does not exists", (done) => {
                try {
                    User.User.fieldValueExists("email", "me.please@test.com")
                        .then((result) => {
                            expect(result).to.be.false;
                            done();
                        })
                        .catch((err) => {
                            done(err);
                        });
                } catch (e) {
                    done(e);
                }
            });

            it("throws", (done) => {
                User.User.fieldValueExists(["emailEncrypted"], "me.please")
                    .then(() => {
                        expect(true).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(Error);
                        done();
                    });
            });
        });

        describe("usernameExists", function () {
            it("exists", (done) => {
                User.User.usernameExists("testerUser312")
                    .then((result) => {
                        expect(result).to.be.true;
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("does not exists", (done) => {
                User.User.usernameExists("testerUser31212")
                    .then((result) => {
                        expect(result).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("throws", (done) => {
                User.User.usernameExists(["me.please"])
                    .then(() => {
                        expect(true).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(Error);
                        done();
                    });
            });
        });

        describe("emailExists", function () {
            it("exists", (done) => {
                User.User.emailExists("tester312@email.com")
                    .then((result) => {
                        expect(result).to.be.true;
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("does not exists", (done) => {
                User.User.emailExists("tester312@email.com12")
                    .then((result) => {
                        expect(result).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("throws", (done) => {
                User.User.emailExists(["tester312@email.com"])
                    .then(() => {
                        expect(true).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(Error);
                        done();
                    });
            });
        });

        describe("getByFieldValue", function () {
            it("exists", (done) => {
                User.User.getByFieldValue("email", "tester312@email.com")
                    .then((result) => {
                        expect(result.username).to.be.equal("testerUser312");
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("does not exists", (done) => {
                User.User.getByFieldValue("email", "me.please")
                    .then((result) => {
                        expect(result).to.be.not.ok;
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("throws", (done) => {
                User.User.getByFieldValue(["email"], "me.please")
                    .then(() => {
                        expect(true).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(Error);
                        done();
                    });
            });
        });

        describe("getByUsername", function () {
            it("exists", (done) => {
                User.User.getByUsername("testerUser312")
                    .then((result) => {
                        expect(result.username).to.be.equal("testerUser312");
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("does not exists", (done) => {
                User.User.getByUsername("testerUser31212")
                    .then((result) => {
                        expect(result).to.be.not.ok;
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("throws", (done) => {
                User.User.getByUsername(["me.please"])
                    .then(() => {
                        expect(true).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(Error);
                        done();
                    });
            });
        });

        describe("getByEmail", function () {
            it("exists", (done) => {
                User.User.getByEmail("tester312@email.com")
                    .then((result) => {
                        expect(result.username).to.be.equal("testerUser312");
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("does not exists", (done) => {
                User.User.getByEmail("tester312@email.com12")
                    .then((result) => {
                        expect(result).to.be.not.ok;
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            });

            it("throws", (done) => {
                User.User.getByEmail(["tester312@email.com"])
                    .then(() => {
                        expect(true).to.be.false;
                        done();
                    })
                    .catch((err) => {
                        expect(err).to.be.instanceof(Error);
                        done();
                    });
            });
        });

        describe("validators", function () {
            it("roles - not valid, single, an Array", (done) => {
                let invalidRoleUser = new User.User({
                    userID: 1,
                    email: "tester312@email.com",
                    username: "testerUser312",
                    role: ["tester"],
                    emailConfirmed: false,
                    password: "qwertyStory",
                });
                invalidRoleUser.validate((err) => {
                    if (err) {
                        done();
                    } else {
                        done("No validation problem, but role is invalid");
                    }
                });
            });
            it("roles - not valid, empty list", (done) => {
                let invalidRoleUser = new User.User({
                    userID: 111,
                    email: "tester312@email.com",
                    username: "testerUser312",
                    role: [],
                    emailConfirmed: false,
                    password: "qwertyStory",
                });
                invalidRoleUser.validate((err) => {
                    if (err) {
                        done();
                    } else {
                        done("No validation problem, but role is invalid");
                    }
                });
            });
        });
    });
});
