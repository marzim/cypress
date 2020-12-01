describe("Loading to attract", () => {
  it("Welcome to attract", () => {
    cy.startApp();
    cy.checkWelcome();
    cy.forceClickButton('Search or key in item');
    cy.wait(2000);
    cy.forceClickButton('1');
    cy.forceClickButton('2');
cy.forceClickButton('3');
cy.forceClickButton('OK');
cy.wait(2000);
cy.get('data-cy=Unknown Item').should('be.visible');
cy.forceClickButton('okButton');
cy.wait(1000);
cy.forceClickButton('payButton');
    //cy.get("[data-cy=receiptArea]").should("be.visible");

    cy.wait(4000);
    cy.checkWelcome();

});
});
