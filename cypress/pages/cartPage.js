class CartPage {
      
    addFirstProductToCart() {
      cy.get('.owl-item.active .add_to_cart_button').first().click();
    }
  
    removeFirstProductFromCart() {
      cy.get('.remove').first().click();
    }
  
    updateProductQuantity(quantity) {
      cy.get('.quantity input').clear().eq(1).type(quantity);
      cy.get('[name="update_cart"]').click();
    }
  }
  
  export default CartPage;
  