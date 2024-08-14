/// <reference types="cypress" />
 

Cypress.Commands.add('dataCy', (value) => {
    return cy.get(`[data-cy=${value}]`)
})

Cypress.Commands.add('loadPage', () => {
        cy.visit('/');  
})