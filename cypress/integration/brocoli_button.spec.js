/// <reference types="cypress" />

before( () => { 
    cy.visit('/')
})

it('myFirstTest_displayButton', () => {
    cy.get('button#alphaMale').should('be.visible')
})

it('myFirstTest_clickButton_CheckResult', () => {
    cy.get('button#alphaMale').click()
    cy.get('h2#answer').should('be.visible').and('contains.text', 'Matthieu, tout simplement')
})