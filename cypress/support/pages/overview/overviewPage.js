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

    quantityChosen(){
        cy.get(elem.quantity_chosen).should('be.visible')
    }

    informationPayment(){
        cy.get(elem.information_payment).should('be.visible')
    }

    shippingInformation(){
        cy.get(elem.shipping_information).should('be.visible')
    }

    priceTotal(){
        cy.get(elem.price_total).should('be.visible')
    }

    taxa(){
        cy.get(elem.taxa).should('be.visible')
    }

    valueTotal(){
        cy.get(elem.value_total).should('be.visible')
    }

    buttonFinish(){
        cy.get(elem.finish_button).should('be.visible').click()
    }


}

export default new overview()