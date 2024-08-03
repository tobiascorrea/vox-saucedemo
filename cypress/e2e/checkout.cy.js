/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import homePage from '../support/pages/home/homePage';
import cartPage from '../support/pages/cart/cartPage';
import checkoutPage from '../support/pages/checkout/checkoutPage';

describe('Página de checkout', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });
    
    context('Finalizando uma compra com sucesso', () => {
        
        it('Dado que o usuário esteja na página do carrinho', () => {
            homePage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.cartPageValidate()
        });

        it('E clica no botão "CHECKOUT"', () => {
            checkoutPage.clickCheckout()
        });

        it('Então o item deverá ter sido removido', () => {
            homePage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.removeFromCart()
            cartPage.validateRemovedItemFromCart()
        });

    });

});