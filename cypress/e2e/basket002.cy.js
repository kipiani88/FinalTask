describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.get('.menu-pop > .rprof').click();
    cy.auth001();
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart > p').click();
    cy.contains('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count', '1').should('be.visible');
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click();
    cy.contains('.gramage', 'ცალი').should('be.visible');
  })
})

// ტოპ პროდუქციიდან კალათაში დამატება