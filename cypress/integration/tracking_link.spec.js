/// <reference types="cypress" />

before( () => { 
    cy.visit('/')
})

it('myFirstTest_displayLOGO', () => {
    cy.get('img#logo').should('be.visible')
})

it.skip('myFirstTest_displayLOGO', () => {
    cy.get('img#logo').should('be.present')
})
    

