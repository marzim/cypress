describe("Loading to attract", () => {
  it("Welcome to attract", () => {
    cy.startApp();
    cy.checkWelcome();
});
it("Going to Store mode", () => {
 cy.clickButton('attendant');
cy.wait(1000);
cy.clickButton('storeloginButton');
cy.wait(1000);
cy.storeLogin();
cy.wait(1000);
});

it("Store mode", () => {
cy.get("[data-cy=storeModeTitleArea]").should("be.visible");
cy.wait(1000);
cy.clickButton('StoreModeCloseLaneButton')
cy.wait(1000);

});

it("Lane Closed", () => {
cy.get('[data-cy="Lane Closed"]').should("be.visible");
cy.wait(1000);
cy.clickButton('storeloginButton')
cy.wait(1000);
cy.storeLogin();
cy.wait(1000);
});   

it("Back to attact", () => {
   cy.checkWelcome();
});
});
