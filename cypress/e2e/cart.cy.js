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

    const addItemAndNavigateToCart = () => {
        productPage.addItemToCart()
        cartPage.navigateToCart()
    };

    context('Removendo item do carrinho', () => {

        it('Dado que o usuário esteja na página do carrinho', () => {
            addItemAndNavigateToCart()
            cartPage.cartPageValidate()
        });

        it('E clica em "REMOVE" para remover um item do carrinho', () => {
            addItemAndNavigateToCart()
            cartPage.removeFromCart()
        });

        it('Então o item deverá ter sido removido com sucesso', () => {
            addItemAndNavigateToCart()
            cartPage.removeFromCart()
            cartPage.validateRemovedItemFromCart()
        });

    });

});