describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.get('.menu-pop > .rprof').click();
    cy.auth001();
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click();
    cy.get('.empty > p').should('contain', 'ცარიელია');
    cy.get('.bred > :nth-child(2) > a').should('be.visible');

  })
})

//ცარიელი კალათის გვერდის ნახვა