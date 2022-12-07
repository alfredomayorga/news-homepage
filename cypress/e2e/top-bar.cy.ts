describe('Top Bar', () => {
  before(() => {
    cy.visit('/')
  })
  it('should have a visible logo', () => {
    cy.getByData('logo').should('be.visible')
  })
  it('should have a mobile menu button if is mobile', () => {
    cy.viewport(350, 540)
    cy.getByData('mobile-menu-button').should('be.visible')
  })
})

export {}
