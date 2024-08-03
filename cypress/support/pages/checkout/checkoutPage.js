/// <reference types="cypress" />

const elem = require('./elementsCheckout').ELEMENTS

class checkout{
    checkoutPageIsVisible(){
        cy.get(elem.home_title).should('contain', 'Checkout: Your Information')
    }
    
    checkoutPageIsNotVisible(){
        cy.get(elem.home_title).should('not.to.exist')
    }

    productsAreVisible(){
        cy.get(elem.item_container).should('be.visible')
    }

    clickCheckout(){
        cy.get(elem.checkout_button).should('be.visible').click()
    }


}

export default new checkout()