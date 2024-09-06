describe("notUser.Overall", function () {
    before(async () => {
        await cy.exec("npm run buildtest:guest");
    });

    it("notUser functions", function (done) {
        cy.visit("http://localhost:7357/");
        cy.wait(2000);
        cy.get("li.failures em").then(($res) => {
            const txt = $res.text();
            expect(txt).to.eq("0");
            done();
        });
    });
});
