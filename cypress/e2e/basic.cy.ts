describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h1')
    .contains('K-Pop Stack');
  })
})