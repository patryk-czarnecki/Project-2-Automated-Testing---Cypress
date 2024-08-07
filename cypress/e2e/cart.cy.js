import CartPage from '../pages/cartPage';
import HomePage from '../pages/homePages';
import data from '../fixtures/example.json';

const cartPage = new CartPage();
const homePage = new HomePage();

describe('Shopping Cart', () => {
  it('should add a product to the cart', () => {
    cy.visit('/');    
    cartPage.addFirstProductToCart();
    cy.contains('Product added to cart').should('be.visible');
  });
  
  it('should update the product quantity in the cart', () => {
    cy.visit('/');
    cartPage.addFirstProductToCart();
    homePage.goToCart();    
    cartPage.updateProductQuantity(2);
    cy.get('.quantity input').should('have.value', '2');
  });

  it('should remove a product from the cart', () => {
    cy.visit('/');
    cartPage.addFirstProductToCart();
    homePage.goToCart();
    cartPage.removeFirstProductFromCart();
    cy.contains('Product removed from cart').should('be.visible');
  });
});
