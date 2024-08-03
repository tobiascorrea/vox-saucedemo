/// <reference types="cypress" />

const elem = require('./elementsLogin').ELEMENTS

class login{

    validateLoginPage(){
        cy.get(elem.username).should('be.visible')
        cy.get(elem.password).should('be.visible')
    }

    typeCredentials(){
        cy.get(elem.username).type(Cypress.env('USERNAME'), { log: false })
        cy.get(elem.password).type(Cypress.env('PASSWORD'), { log: false })
        cy.get(elem.loginButton).click()
    }
    
    typeCredentialsAndLogin(){
        this.typeCredentials()
        
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
        cy.get(elem.home_menu).click({force: true})
        cy.get(elem.logoff_button).click()
    }
}

export default new login()