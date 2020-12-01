describe("Loading to attract", () => {
  it("Welcome to attract", () => {
    cy.startApp();
    //subscribe topic
    
    //cy.task('subscribe', {topic: Cypress.env('topiccompletetrans')});
	
    cy.get("[data-cy=startButton]").should("be.visible").click();
    cy.wait(5000);
    cy.get("[data-cy=receiptArea]").should("be.visible");

    cy.get("[data-cy=searchButton]").should("be.visible").click({force: true});
    cy.wait(5000);
    cy.get("[data-cy=1]").click();
    cy.get("[data-cy=1]").click();
    cy.get("[data-cy=1]").click();
    cy.get("[data-cy=1]").click();
    cy.get("[data-cy=enterButton]").click({force: true});
    cy.wait(5000);
    cy.get("#skipBaggingButton").click({force: true});

    //cy.get("#total-value").should('be.empty')
    //cy.get("#total-value").should(($total) => {
      //let totalText = $total.text();
      //let totalValue = ParseService.parseNumber(totalText);
      //expect(totalValue).to.equal(0.0);
      //expect(totalText).to.contain("$");
    //});
    cy.task('publish', {topic: Cypress.env('scannerdevice'), message: JSON.stringify({"Header":{"MessageID":"1"},"Operation":{"Name":"Scan","ScanData":"B31111", "ScanDataLabel":"1111", "ScanDataType":110}}
	)});
    cy.get("[data-cy=payButton]").click({force: true});
    cy.wait(4000);
    cy.get("[data-cy=paymentTitle]").contains("Select Payment Type");
    cy.get("[data-cy=Tender1]").click({force: true});
    cy.wait(2000);
    cy.task('publish', {topic: Cypress.env('topiccoin'), message: JSON.stringify(
    {"Header":{"MessageID":"1"},"Operation":{"Name":"InsertCoins","Counts":[{"denomination":100,"count":1}]}}

)});

cy.task('publish', {topic: Cypress.env('tender'), message: JSON.stringify({
    "event": "tender",
    "params": { 
        "type": "cash",
        "currency": "USD",
    	"amount": 200
    }
})});
    cy.checkWelcome();

   

});
});
