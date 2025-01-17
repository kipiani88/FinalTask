describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.get('.rprof > p').click();
    cy.auth001();
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.contains('.menu-pop > .iprof', 'პროფილი').should('be.visible');
    cy.get('.menu-pop > .iprof > p').click();
    cy.contains('.logout-mobile', 'გასვლა').should('be.visible');    

  })
})