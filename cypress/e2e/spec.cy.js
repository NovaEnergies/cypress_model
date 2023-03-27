describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Cypress{Enter}')
    // cy.contains('Поиск в Google').click()
  })
})