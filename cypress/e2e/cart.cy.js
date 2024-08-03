/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import homePage from '../support/pages/home/homePage';
import cartPage from '../support/pages/cart/cartPage';

describe('Página do carrinho', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });
    
    context('Removendo item do carrinho', () => {
        
        it('Dado que o usuário esteja na página do carrinho', () => {
            homePage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.cartPageValidate()
        });

        it('E clica em "REMOVE"', () => {
            homePage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.removeFromCart()
        });

        it.only('Então o item deverá ter sido removido', () => {
            homePage.addItemToCart()
            cartPage.navigateToCart()
            cartPage.removeFromCart()
            cartPage.validateRemovedItemFromCart()
        });

    });

});