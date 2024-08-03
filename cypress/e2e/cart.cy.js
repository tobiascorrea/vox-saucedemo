/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import productPage from '../support/pages/products/ProductPage';
import cartPage from '../support/pages/cart/cartPage';

describe('Página do carrinho', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });
    
    context('Removendo item do carrinho', () => {
        
        it('Dado que o usuário esteja na página do carrinho', () => {
            productPage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.cartPageValidate()
        });

        it('E clica em "REMOVE"', () => {
            productPage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.removeFromCart()
        });

        it('Então o item deverá ter sido removido', () => {
            productPage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.removeFromCart()
            cartPage.validateRemovedItemFromCart()
        });

    });

});