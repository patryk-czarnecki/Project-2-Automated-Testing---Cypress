import RegistrationPage from '../pages/registrationPage';
import HomePage from '../pages/homePages';
import data from '../fixtures/example.json';

const registrationPage = new RegistrationPage();
const homePage = new HomePage();

describe('User Registration', () => {
  it('should register a new user with valid data', () => {
    cy.visit('/');
    homePage.goToRegistration();
    registrationPage.fillEmail(data.registration.valid.email);
    registrationPage.fillPassword(data.registration.valid.password);
    registrationPage.submit();
    cy.contains(data.registration.valid.successMessage).should('be.visible');
  });

  it('should show error for existing email', () => {
    cy.visit('/');
    homePage.goToRegistration();
    registrationPage.fillEmail(data.registration.existingEmail.email);
    registrationPage.fillPassword(data.registration.existingEmail.password);
    registrationPage.submit();
    cy.contains(data.registration.existingEmail.errorMessage).should('be.visible');
  });
});
