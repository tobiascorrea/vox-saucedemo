/// <reference types="cypress" />

const elem = require('./elementsCart').ELEMENTS

class cart{

    navigateToCart(){
        cy.get(elem.cart_page).click()
    }

    cartPageValidate(){
        cy.get(elem.cart_title).should('have.text', 'Your Cart')
    }

    removeFromCart(){
        cy.get(elem.remove_from_cart_button).click()
    }

    validateRemovedItemFromCart(){
        cy.get(elem.cart_list).should('not.to.exist')
    }

}

export default new cart()