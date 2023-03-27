it('Read files using fixture', () => {
    cy.fixture('example').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('Read files using readFile()', () => {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
})

it('Write files', () => {
    cy.writeFile('sample.txt', 'Hello World!\n')
    cy.writeFile('sample.txt', 'Hello Cypress!', {flag: 'a+'})
})