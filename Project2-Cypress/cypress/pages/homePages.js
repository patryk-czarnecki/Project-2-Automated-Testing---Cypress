class HomePage {
      
    goToRegistration() {
      cy.get('a[href="https://skleptest.pl/my-account/"]').click();
    }
  
    goToLogin() {
      cy.get('a[href="/my-account"]').click();
    }
  
    goToProducts() {
        cy.visit('/');
    }
  
    goToCart() {
      cy.get('a[href="/cart"]').click();
    }
  }
  
  export default HomePage;
  