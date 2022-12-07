describe('New Section', () => {
  before(() => {
    cy.visit('/')
  })
  it('should have a new section', () => {
    cy.getByData('new-section').should('be.visible')
  })
  it('should have a new section title', () => {
    cy.getByData('new-section-title').should('be.have.length', 1)
  })
  it('should have 3 new articles in the list', () => {
    cy.getByData('new-article').should('be.have.length', 3)
  })
  it('needs new article item to have a title', () => {
    cy.getByData('new-article-title').should('exist')
  })
  it('need new article item to have a description', () => {
    cy.getByData('new-article-description').should('exist')
  })
})

export {}
