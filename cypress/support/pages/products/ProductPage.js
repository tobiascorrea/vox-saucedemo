/// <reference types="cypress" />

const elem = require('./elementsProduscts').ELEMENTS

class ProductPage {
    homePageIsVisible() {
        cy.get(elem.home_title).should('contain', 'Products')
    }

    homePageIsNotVisible() {
        cy.get(elem.home_title).should('not.to.exist')
    }

    productsAreVisible() {
        cy.get(elem.item_container).should('be.visible')
    }

    addItemToCart() {
        cy.get(elem.add_to_cart_button).click()
    }

    clickIconCart() {
        cy.get(elem.cart_link).click()
    }
}

export default new ProductPage()