/// <reference types="cypress" />
const elem = require('./elementsOverview').ELEMENTS

class overview{
    overviewPageIsVisible(){
        cy.get(elem.title_page_overview).should('contain', 'Checkout: Overview')
    }
    
    overviewPageIsNotVisible(){
        cy.get(elem.title_page_overview).should('not.to.exist')
    }

    productsAreVisible(){
        cy.get(elem.itens_chosen).should('be.visible')
    }

    clickButtonCheckout(){
        cy.get(elem.checkout_button).should('be.visible').click()
    }

    clickButtonContinue(){
        cy.get(elem.submit_checkout).should('be.visible').click()
    }


}

export default new overview()