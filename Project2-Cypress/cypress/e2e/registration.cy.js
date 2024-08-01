import RegistrationPage from '../pages/registrationPage';
import HomePage from '../pages/homePages';

const registrationPage = new RegistrationPage();
const homePage = new HomePage();

describe('User Registration', () => {
  it('should register a new user with valid data', () => {
    cy.visit('/');
    homePage.goToRegistration();
    registrationPage.fillEmail('testowyemail@gmail.com');
    registrationPage.fillPassword('Testowehaslo1@');
    registrationPage.submit();
    cy.contains('Hello testowyemail').should('be.visible');
  });

  it('should show error for existing email', () => {
    cy.visit('/');
    homePage.goToRegistration();
    registrationPage.fillEmail('testowyemail@gmail.com');
    registrationPage.fillPassword('Testowehaslo1@');
    registrationPage.submit();
    cy.contains('An account is already registered with your email address. Please log in.').should('be.visible');
  });
});
