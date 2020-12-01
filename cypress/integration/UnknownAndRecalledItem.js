describe("Loading to attract", () => {
  it("Welcome to attract", () => {
    cy.startApp();
    cy.checkWelcome();
});
it("Search key in item", () => {
 cy.clickButton('"Search or key in item"');
    cy.wait(2000);
    cy.clickButton('1');
    cy.clickButton('1');
cy.clickButton('1');
cy.clickButton('3');
cy.clickButton('OK');
cy.wait(4000);
cy.get('[data-cy="Recalled Item"]', { timeout: 60000}).should('be.visible');
cy.clickButton('okButton');
cy.wait(1000);
});
   
it("Handle Recalled Item", () => {

//cy.clickButton('payButton');
    cy.get('[data-cy="Wait for store approval. Approval needed for:"]', { timeout: 60000}).should('be.visible');
    cy.wait(1000);
    cy.clickButton('storeloginButton');
   cy.wait(1000);
   cy.storeLogin();
   cy.wait(1000);
cy.get("[data-cy=storeModeTitleArea]").should("be.visible");
cy.wait(1000);
cy.clickButton('StoreModeExitButton')
cy.wait(1000);
cy.clickButton('payButton');
    cy.checkWelcome();

});
});
