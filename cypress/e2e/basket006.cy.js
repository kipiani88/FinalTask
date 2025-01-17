describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.get('.menu-pop > .rprof').click();
    cy.auth001();
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.get('.popmenu-burger > .burger-span').click();
    cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click();
    cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click();
    cy.get('.category-holder > .active > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-item-img > img').click();
    cy.get('.add-pro').click();
    cy.contains('.add-pro > span > :nth-child(2)', 'დამატებულია').should('be.visible');
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count').should('contain', '1');
       



  })
})

// პროდუქტის დამატება კალათაში პროდუქტის გვერდიდან