// cypress/e2e/sample.cy.js
describe('Sample Test', () => {
  it('visits example.com and checks for text', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
})