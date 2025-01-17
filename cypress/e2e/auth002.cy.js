describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.get('.menu-pop > .rprof').click();
    cy.fixture("example.json").then((userInfo) => {
      cy.get(':nth-child(5) > .imail').type(userInfo.email);
      cy.get('.ipass').type(userInfo.password);
      
    } )
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.contains('.avtorization > .input-shablon > .form-button', 'ავტორიზაცია').should('be.visible');
    cy.contains('.avtorization > .input-shablon > h2', 'ავტორიზაცია').should('be.visible');
  })
  })