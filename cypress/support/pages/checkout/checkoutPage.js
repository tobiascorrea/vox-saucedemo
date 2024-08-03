import { faker } from '@faker-js/faker';
/// <reference types="cypress" />

const elem = require('./elementsCheckout').ELEMENTS;

class checkout {
    checkoutPageIsVisible() {
        cy.get(elem.checkoutPageIsVisible).should('contain', 'Checkout: Your Information');
    }
    
    checkoutPageIsNotVisible() {
        cy.get(elem.checkoutPageIsNotVisible).should('not.to.exist');
    }

    productsAreVisible() {
        cy.get(elem.item_container).should('be.visible');
    }

    clickButtonCheckout() {
        cy.get(elem.checkout_button).should('be.visible').click();
    }

    clickButtonContinue() {
        cy.get(elem.submit_checkout).should('be.visible').click();
    }

    fillForm() {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const postalCode = faker.address.zipCode();

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
    }

    checkoutCompleteIsVisible() {
        cy.get(elem.checkout_Complete).should('be.visible').should('contain', 'Thank you for your order!');
    }

    messageSucess() {
        cy.get(elem.messageSucess).should('be.visible').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }

    titleCheckoutComplete() {
        cy.get(elem.title_Checkout_Complete).should('be.visible').should('contain', 'Checkout: Complete!');
    }
}

export default new checkout();