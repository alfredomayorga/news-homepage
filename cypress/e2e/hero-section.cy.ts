describe('Hero Section', () => {
  before(() => {
    cy.visit('/')
  })
  it('should have a hero image', () => {
    cy.getByData('hero-image')
      .should('have.attr', 'src')
      .should('be.visible')
  })
})

export {}
