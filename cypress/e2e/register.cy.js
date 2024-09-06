describe("notUser.Guest", function () {
    before(() => {
        cy.exec("npm run build:testapp:guest");
    });

    it("notUser.Guest Register UI", function (done) {
        cy.visit("http://localhost:7357/register");

        cy.get("div.user-register-form-paper").should("exist");
        done();
    });
});
