import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePages';
import data from '../fixtures/example.json';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('User Login', () => {
  it('should log in with valid credentials', () => {
    cy.visit('/');
    homePage.goToLogin();
    loginPage.fillEmail(data.login.valid.email);
    loginPage.fillPassword(data.login.valid.password);
    loginPage.submit();
    cy.contains(data.login.valid.successMessage).should('be.visible');
  });

  it('should show error for invalid password', () => {
    cy.visit('/');
    homePage.goToLogin();
    loginPage.fillEmail(data.login.invalidPassword.email);
    loginPage.fillPassword(data.login.invalidPassword.password);
    loginPage.submit();
    cy.contains(data.login.invalidPassword.errorMessage).should('be.visible');
  });

  it('should show error for non-existent email', () => {
    cy.visit('/');
    homePage.goToLogin();
    loginPage.fillEmail(data.login.nonExistentEmail.email);
    loginPage.fillPassword(data.login.nonExistentEmail.password);
    loginPage.submit();
    cy.contains(data.login.nonExistentEmail.errorMessage).should('be.visible');
  });

  it('should show error for empty email', () => {
    cy.visit('/');
    homePage.goToLogin();
    loginPage.fillPassword(data.login.emptyEmail.password);
    loginPage.submit();
    cy.contains(data.login.emptyEmail.errorMessage).should('be.visible');
  });

  it('should show error for empty password', () => {
    cy.visit('/');
    homePage.goToLogin();
    loginPage.fillEmail(data.login.emptyPassword.email);
    loginPage.submit();
    cy.contains(data.login.emptyPassword.errorMessage).should('be.visible');
  });
});
