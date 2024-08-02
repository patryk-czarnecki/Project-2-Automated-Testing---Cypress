class LoginPage {
    
    fillEmail(value) {
      cy.get('[name="username"]').type(value);
    }
  
    fillPassword(value) {
      cy.get('#password').type(value);
    }
  
    submit() {
      cy.get('[name="login"]').click();
    }
  }
  
  export default LoginPage;
  