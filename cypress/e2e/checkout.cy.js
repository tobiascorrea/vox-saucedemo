/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import productPage from '../support/pages/products/ProductPage';
import cartPage from '../support/pages/cart/cartPage';
import checkoutPage from '../support/pages/checkout/checkoutPage';
import overviewPage from '../support/pages/overview/overviewPage';

describe('Página de checkout', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });
    
    context('Realizando checkout com sucesso', () => {
        
        it('Dado que o usuário acesse a pagina de produtos', () => {
            productPage.homePageIsVisible()
            
        });

        it('E visualize a lista de produtos"', () => {
            productPage.productsAreVisible()
        });

        it('E adiciona um item ao carrinho"', () => {
            productPage.addItemToCart()
        });

        it('E visualiza que o item foi adicionado com sucesso ao carrinho"', () => {
            cartPage.addItemFromCart()
            cartPage.validateAddedItemFromCart()
        });

        it('E é redirecionado para a página de meu carrinho', () => {
            productPage.addItemToCart()
            productPage.clickIconCart()
            cartPage.showItensCart()
            cartPage.cartPageValidate()
        });

        it('E preenche o formulário de checkout', () => {
            productPage.addItemToCart()
            productPage.clickIconCart()
            cartPage.clickButtonCheckout()
            checkoutPage.fillForm()
        });

        it('Quando clico no botão "CONTINUE"', () => {
            productPage.addItemToCart()
            productPage.clickIconCart()
            cartPage.clickButtonCheckout()
            checkoutPage.clickButtonContinue()
        });

        it('Então devo ser redirecionado para a tela de "Checkout: Overview" com sucesso', () => {
            productPage.addItemToCart()
            productPage.clickIconCart()
            cartPage.clickButtonCheckout()
            checkoutPage.fillForm()
            checkoutPage.clickButtonContinue()
            overviewPage.overviewPageIsVisible()
    


        });


    });

});