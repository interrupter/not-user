

describe('notUser.Guest', function() {
  before( () => {
    cy.exec('npm run buildtest:guest');
  });

  beforeEach(()=>{
    cy.intercept('GET', '/api/manifest', { fixture: 'manifest.guest.json' });
  });

  it('Login by email/password - not valid, client side', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.get('input[type="email"]').type('invalid.email');
    cy.get('input[type="password"]').type('invalid.password');
    cy.get('.user-login-form-submit').should('be.disabled');
    cy.get('input[type="email"]:invalid').should('exist');
  });

  it('Login by email/password - not valid, server side', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.intercept('POST', '/api/user/login', {
      body: {
        status: 'error',
        error: 'email_not_valid'
      },
    });
    cy.get('input[type="email"]').type('invalid.email');
    cy.get('input[type="password"]').type('invalid.password');
    cy.get('.user-login-form-submit').should('be.disabled');
    cy.get('input[type="email"]').type('{selectall}{del}invalid@email.ru');
    cy.get('.user-login-form-submit').should('be.enabled');
    cy.get('.user-login-form-submit').click();
    cy.get('article.message.is-danger').should('exist');
  });

  it('Login by login/password - valid', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.get('input[type="email"]').type('vasya@pupkin.hacker');
    cy.get('input[type="password"]').type('password');
    cy.get('.user-login-form-submit').should('be.enabled');
    cy.get('.user-login-form-submit').click();
    cy.get('.user-login-form-email .is-danger').should('not.exist');
    cy.get('article.message.is-danger').should('not.exist');
    cy.get('article.message.is-success').should('exist');
    cy.location('pathname', {timeout: 10000}).should('include', '/dashboard.html');
  });

  it('Login by email request - not valid, client side', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.get('button.user-form-requestLoginCodeOnEmail').click();
    cy.get('button.user-form-login').should('exist');
    cy.get('input[type="password"]').should('not.exist');
    cy.get('input[type="email"]').type('some.invalid@email');
    cy.get('.user-login-form-email .is-danger').should('exist');
    cy.get('.user-login-form-submit').should('be.disabled');
  });

  it('Login by email request - not valid, server side', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.get('button.user-form-requestLoginCodeOnEmail').click();
    cy.get('button.user-form-login').should('exist');
    cy.get('input[type="email"]').type('some.invalid@email.ru');
    cy.get('.user-login-form-submit').should('be.enabled');
    cy.get('.user-login-form-submit').click();
    cy.get('.user-login-form-email+.is-danger').should('exist');
    cy.get('article.message.is-danger').should('exist');
    cy.get('.user-login-form-submit').should('be.disabled');
  });

  it('Login by email request - valid', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.get('button.user-form-requestLoginCodeOnEmail').click();
    cy.get('button.user-form-login').should('exist');
    cy.get('input[type="email"]').type('vasya@pupkin.hacker');
    cy.get('.user-login-form-submit').should('be.enabled');
    cy.get('.user-login-form-submit').click();
    cy.get('article.message.is-danger').should('not.exist');
    cy.get('.user-login-form-submit').should('not.exist');
    cy.get('article.message.is-success').should('exist');
  });

  it('Login by email link - not valid', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.get('button.user-form-loginByCode').click();
    cy.get('input[name="code"]').type('some@email.ru, but not uuidv4 code');
    cy.get('.user-login-form-code .is-danger').should('exist');
    cy.get('.user-login-form-submit').should('be.disabled');
  });

  it('Login by email link - valid', function() {
    cy.visit('http://localhost:7357/login.ui.html');
    cy.get('button.user-form-loginByCode').click();
    cy.get('input[name="code"]').type('50e940b1-4e25-4ad6-83e2-6349a766e653');
    cy.get('.user-login-form-code .is-danger').should('not.exist');
    cy.get('.user-login-form-submit').should('be.enabled');
  });

});
