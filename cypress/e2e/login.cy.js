/// <reference types="cypress" />

import login from '../../support/pages/login/index'
import home from '../../support/pages/home/index'

describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    context('Login com sucesso', () => {
        
        it('Dado que o usuário entra na página da aplicação', () => {
            login.validateLoginPage()
        });
    
        it('E digita credenciais corretas no formulário', () => {
            login.typeCredentials()
        });
    
        it('E clica no botão de "Login"', () => {
            login.typeCredentialsAndLogin()
        });
    
        it('Então a página principal (Home) deve aparecer', () => {
            login.typeCredentialsAndLogin()
            home.homePageIsVisible()
        });

    });

    context('Login sem sucesso', () => {
        
        it('Dado que o usuário entra na página da aplicação', () => {
            login.validateLoginPage()
        });
    
        it('E digita credenciais erradas no formulário', () => {
            login.typeCredentialsError()
        });
    
        it('E clica no botão de "Login"', () => {
            login.typeCredentialsAndLoginError()
        });
    
        it('Então a página principal (Home) não deve aparecer', () => {
            login.typeCredentialsAndLoginError()
            home.homePageIsNotVisible()
        });

    });

    context('Logoff', () => {
    
        it('Dado que o usuário esteja logado na apliação', () => {
            login.validateLoginPage()
            login.typeCredentialsAndLogin()
            home.homePageIsVisible()
        });

        it('E clica na opção "Logoff" dentro do menu hambúrguer no canto superior esquerdo da tela', () => {
            login.validateLoginPage()
            login.typeCredentialsAndLogin()
            login.logoff()
        });

        it('Então ele deverá voltar para a página de login', () => {
            login.validateLoginPage()
        });

    });
});