describe('Navigation Menu', () => {
  before(() => {
    cy.visit('/')
    cy.viewport(340, 540)
  })
  it('should show the mobile menu', () => {
    cy.getByData('mobile-menu-button').click()
    cy.getByData('mobile-nav-menu').should('be.visible')
  })
  it('should have 5 options', () => {
    cy.getByData('menu-nav-item').should('have.length', 5)
  })
  it('should have a close button', () => {
    cy.getByData('mobile-close-menu-button').should('be.visible')
  })
  it('should be able to close the nav menu', () => {
    cy.wait(1000)
    cy.getByData('mobile-close-menu-button').click()
    cy.getByData('mobile-nav-menu').should('not.exist')
  })
})

export {}
