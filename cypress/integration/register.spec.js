

describe('notUser.Guest', function() {
  before(async () => {
    await cy.exec('npm run buildtest:guest');
  });

  it('notUser.Guest Register UI', function() {
    cy.visit('http://localhost:7357/register.ui.html');

    cy.get('div.user-register-form-paper').should('exist');
  });


})
