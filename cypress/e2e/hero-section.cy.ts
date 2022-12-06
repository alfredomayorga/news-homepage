describe('Hero Section', () => {
  before(() => {
    cy.visit('/')
  })
  it('should have a hero image', () => {
    cy.getByData('hero-image').should('be.visible')
  })
  it('should have a hero title', () => {
    cy.getByData('hero-title').should('be.have.length', 1)
  })
  it('should have hero description', () => {
    cy.getByData('hero-description').should('be.have.length', 1)
  })
  it('should have read more button', () => {
    cy.getByData('read-more-button').should('be.visible').click()
  })
})

export {}
