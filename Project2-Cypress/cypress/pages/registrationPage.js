class RegistrationPage {
     
    fillEmail(value) {
      cy.get('#reg_email').type(value);
    }
  
    fillPassword(value) {
      cy.get('#reg_password').type(value);
    }
  
    submit() {
      cy.get('[value="Register"]').click();
    }  
  }
  
  export default RegistrationPage;
  