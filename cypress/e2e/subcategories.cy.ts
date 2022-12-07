describe('Subcategories', () => {
  before(() => {
    cy.visit('/')
  })
  it('should have 3 items', () => {
    cy.getByData('subcategory-item').should('have.length', 3)
  })
  it('checks if the subcategory has an order title', () => {
    cy.getByData('subcategory-order')
      .invoke('text')
      .should('not.be.empty')
  })
  it('checks if subcategory has title', () => {
    cy.getByData('subcategory-title')
      .invoke('text')
      .should('not.be.empty')
  })
  it('checks if subcategory has a description', () => {
    cy.getByData('subcategory-description')
      .invoke('text')
      .should('not.be.empty')
  })
  it('checks if subcategory has a thumbnail', () => {
    cy.getByData('subcategory-thumbnail').should('be.visible')
  })
})

export {}
