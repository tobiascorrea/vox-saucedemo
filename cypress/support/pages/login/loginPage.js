/// <reference types="cypress" />

const elem = require('./elements').ELEMENTS

class login{

    validateLoginPage(){
        cy.get(elem.username).should('be.visible')
        cy.get(elem.password).should('be.visible')
    }

    typeCredentials(){
        cy.get(elem.username).type(Cypress.env('USERNAME'))
        cy.get(elem.password).type(Cypress.env('PASSWORD'))
    }
    
    typeCredentialsAndLogin(){
        this.typeCredentials()
        cy.get(elem.loginButton).click()
    }

    typeCredentialsError(){
        cy.get(elem.username).type('wrong-user').should('have.value', 'wrong-user')
        cy.get(elem.password).type('wrong-password').should('have.value', 'wrong-password')
    }
    
    typeCredentialsAndLoginError(){
        this.typeCredentialsError()
        cy.get(elem.loginButton).click()
    }

    logoff(){
        cy.get(elem.home_menu).click()
        cy.get(elem.logoff_button).click()
    }
}

export default new login()