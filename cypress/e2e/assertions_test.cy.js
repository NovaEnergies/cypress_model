it('Assertions demo', () => {
    cy.visit('https://example.cypress.io')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
    cy.get('#query-btn').should('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')

    expect(true).to.be.true
    // let name = 'cypress'
    // expect(name).to.be.equal('cypress')
    // to.not.equal()
    // to.be.a('string')
    // to.be.true
    // to.be.false
    // to.be.null
    // to.exist
    assert.equal(5, 5, 'not equal')
    assert.strictEqual('5', 5, 'not equal')
    // .notEqual
    // .isAbove
    // .isBelow
    // .exists
    // .notExists
    // .true
    // .false
    // .isString
    // .isNotString
    // .isNumber
    // .isNotNumber

    // validate text on alert
    cy.on('window:alert', (txt) => {
        expect(txt).to.be.equal('message')
    })
})