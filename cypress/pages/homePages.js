class HomePage {
      
    goToRegistration() {
      cy.get('a[href="https://skleptest.pl/my-account/"]').click();
    }
  
    goToLogin() {
      cy.get('a[href="https://skleptest.pl/my-account/"]').click();
    }
        
    goToCart() {
      cy.get('a[href="https://skleptest.pl/cart/"]').click();
    }
  }
  
  export default HomePage;
  