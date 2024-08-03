/// <reference types="cypress" />

import loginPage from '../support/pages/login/loginPage';
import productPage from '../support/pages/products/ProductPage';
import cartPage from '../support/pages/cart/cartPage';
import checkoutPage from '../support/pages/checkout/checkoutPage';
import overviewPage from '../support/pages/overview/overviewPage';

describe('Página de Overview', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.validateLoginPage()
        loginPage.typeCredentialsAndLogin()
    });

    const addItemToCartAndGoToCheckout = () => {
        productPage.addItemToCart()
        productPage.clickIconCart()
        cartPage.clickButtonCheckout()
        checkoutPage.fillForm()
        checkoutPage.clickButtonContinue()
    };
    
    context('Finalizando uma compra com sucesso', () => {
        
        it('Dado que o usuário acesse a pagina de produtos', () => {
            productPage.homePageIsVisible()
        });

        it('E visualize a lista de produtos', () => {
            productPage.productsAreVisible()
        });

        it('E adiciona um item ao carrinho', () => {
            productPage.addItemToCart()
        });

        it('E visualiza que o item foi adicionado com sucesso ao carrinho', () => {
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
            addItemToCartAndGoToCheckout()
        });

        it('E clico no botão "CONTINUE"', () => {
            addItemToCartAndGoToCheckout()
        });

        it('E sou redirecionado para a tela de "Checkout: Overview" com sucesso', () => {
            addItemToCartAndGoToCheckout()
            overviewPage.overviewPageIsVisible()
        });

        it('E visualizo os dados contidos na tela de "Checkout: Overview"', () => {
            addItemToCartAndGoToCheckout()
            overviewPage.overviewPageIsVisible()
            overviewPage.overviewproductsAreVisible()
            overviewPage.quantityChosen()
            overviewPage.informationPayment()
            overviewPage.shippingInformation()
            overviewPage.priceTotal()
            overviewPage.taxa()
            overviewPage.valueTotal()
        });

        it('Quando clico no botão "FINISH"', () => {
            addItemToCartAndGoToCheckout()
            overviewPage.overviewPageIsVisible()
            overviewPage.overviewproductsAreVisible()
            overviewPage.quantityChosen()
            overviewPage.informationPayment()
            overviewPage.shippingInformation()
            overviewPage.priceTotal()
            overviewPage.taxa()
            overviewPage.valueTotal()
            overviewPage.buttonFinish()
        });

        it('Então devo visualizar a tela de "Checkout: Complete!"', () => {
            addItemToCartAndGoToCheckout()
            overviewPage.overviewPageIsVisible()
            overviewPage.overviewproductsAreVisible()
            overviewPage.quantityChosen()
            overviewPage.informationPayment()
            overviewPage.shippingInformation()
            overviewPage.priceTotal()
            overviewPage.taxa()
            overviewPage.valueTotal()
            overviewPage.buttonFinish()
            checkoutPage.checkoutCompleteIsVisible()
            checkoutPage.messageSucess()
            checkoutPage.titleCheckoutComplete()
        });

    });

});