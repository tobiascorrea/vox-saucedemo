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

    addItemFromCart(){
        cy.get(elem.add_item_cart_button).should('exist').click()
    }

    validateAddedItemFromCart(){
        cy.get(elem.cart_badge).should('be.visible').should('is.not.empty')
    }

    showCartBadge(){
        cy.get(elem.cart_badge).should('be.visible')
    }
    
    showItensCart(){
        cy.get(elem.inventory_item).should('be.visible')
    }

    clickButtonCheckout(){
        cy.get(elem.button_your_cart).should('be.visible').click()
    }

}

export default new cart()