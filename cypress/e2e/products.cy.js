/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import productPage from '../support/pages/products/ProductPage';
import cartPage from '../support/pages/cart/cartPage';

describe('Página principal | Produtos', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });
    
    context('Acessa a Pagina de Produtos, visualiza os itens e adiciona um item ao carrinho', () => {
        
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