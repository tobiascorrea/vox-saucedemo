/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import homePage from '../support/pages/home/homePage';

describe('Página principal | Home', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });
    
    context('Adicionando item no carrinho', () => {
        
        it('Dado que o usuário está na página principal (Home)', () => {
            homePage.homePageIsVisible()
        });

        it('E consegue visualizar os produtos listados', () => {
            homePage.productsAreVisible()
        });

        it('Quando clicar no botão "ADD TO CART"', () => {
            homePage.addItemToCart()
        });

        it('Então um novo item deverá ter sido adicionado no carrinho de compras', () => {
            homePage.addItemToCart()
            homePage.showCartBadge()
        });

    });

});