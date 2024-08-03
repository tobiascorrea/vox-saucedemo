/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import productPage from '../support/pages/products/productPage';
import cartPage from '../support/pages/cart/cartPage';

describe('Página principal | Produtos', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });
    
    context('Adicionando item no carrinho', () => {
        
        it('Dado que o usuário está na página principal (Produtos)', () => {
            productPage.homePageIsVisible()
        });

        it('E consegue visualizar os produtos listados', () => {
            productPage.productsAreVisible()
        });

        it('Quando clicar no botão "ADD TO CART"', () => {
            productPage.addItemToCart()
        });

        it('Então um novo item deverá ter sido adicionado no carrinho de compras', () => {
            productPage.addItemToCart()
            cartPage.showCartBadge()
            cartPage.validateAddedItemFromCart()
        });

    });

});