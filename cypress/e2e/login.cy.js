/** global cy */
describe("notUser.Guest", function () {
    const submitBtn = "#LoginForm-form-set-container button.is-primary";

    before(() => {
        cy.exec("npm run build:testapp:guest");
    });

    beforeEach(() => {
        /*      cy.intercept("GET", "/api/manifest", {
            fixture: "manifest.guest.json",
        });*/
        cy.visit("http://localhost:7357/login", { timeout: 3000 });
    });

    afterEach((done) => {
        console.log("afterEach");
        done();
    });

    it("Login by email/password - not valid, client side", () => {
        cy.get('input[type="email"]').type("invalid.email");
        cy.get('input[type="password"]').type("invalid.password");
        cy.get(submitBtn).should("be.disabled");
        cy.get('input[type="email"]:invalid').should("exist");
    });

    it("Login by email/password - not valid, server side", () => {
        cy.intercept("POST", "/api/user/login", {
            body: {
                status: "error",
                error: "email_not_valid",
            },
        });
        cy.get('input[type="email"]').type("invalid.email");
        cy.get('input[type="password"]').type("invalid.password");
        cy.get(submitBtn).should("be.disabled");
        cy.get('input[type="email"]').type("{selectall}{del}invalid@email.ru");
        cy.get(submitBtn).should("be.enabled");
        cy.get(submitBtn).click();
        cy.get("div.notification.is-danger").should("exist");
    });

    it("Login by login/password - valid", () => {
        cy.get('input[type="email"]').type("vasya@pupkin.hacker");
        cy.get('input[type="password"]').type("password");
        cy.get(submitBtn).should("be.enabled");
        cy.get(submitBtn).click();
        cy.get(".user-login-form-email .is-danger").should("not.exist");
        cy.get("div.notification.is-danger").should("not.exist");
        //cy.get("div.notification.is-success").should("exist");
        cy.location("pathname", { timeout: 10000 }).should(
            "include",
            "/dashboard"
        );
    });

    it("Login by email request - not valid, client side", () => {
        cy.get("button").contains("By email").click();
        cy.get("button").contains("Login").should("exist");
        cy.get('input[type="password"]').should("not.exist");
        cy.get('input[type="email"]').type("some.invalid@email");
        cy.get("#input-field-helper-email.is-danger").should("exist");
        cy.get(submitBtn).should("be.disabled");
    });

    it("Login by email request - not valid, server side", () => {
        cy.get("button").contains("By email").click();
        cy.get("button").contains("Login").should("exist");
        cy.get('input[type="email"]').type("some.invalid@email.ru");
        cy.get(submitBtn).should("be.enabled");
        cy.get(submitBtn).click();
        cy.get(".form-field-UIEmail-email+.is-danger").should("exist");
        cy.get("div.notification.is-danger").should("exist");
        cy.get(submitBtn).should("be.disabled");
    });

    it("Login by email request - valid", function () {
        cy.get("button").contains("By email").click();
        cy.get("button").contains("Login").should("exist");
        cy.get('input[type="email"]').type("vasya@pupkin.hacker");
        cy.get(submitBtn).should("be.enabled");
        cy.get(submitBtn).click();
        cy.get("div.notification.is-danger").should("not.exist");
        cy.get(submitBtn).should("not.exist");
        cy.get("div.notification.is-success").should("exist");
    });

    it("Login by email link - not valid", function () {
        cy.get("button").contains("One Time Code").click();
        cy.get('input[name="code"]').type("some@email.ru, but not uuidv4 code");
        cy.get(
            ".field.form-field-UITextfield-code #input-field-helper-code.is-danger"
        ).should("exist");
        cy.get(submitBtn).should("be.disabled");
    });

    it("Login by email link - valid", function () {
        cy.get("button").contains("One Time Code").click();
        cy.get('input[name="code"]').type(
            "50e940b1-4e25-4ad6-83e2-6349a766e653"
        );
        cy.get(".user-login-form-code .is-danger").should("not.exist");
        cy.get(submitBtn).should("be.enabled");
    });
});
