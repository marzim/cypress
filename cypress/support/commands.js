// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


Cypress.Commands.add("storeLogin", () => {
    cy.clickButton('1');
	cy.clickButton('OK');
	cy.clickButton('1');
	cy.clickButton('0');
	cy.clickButton('OK');
  });
  Cypress.Commands.add("startApp", () => {
    cy.server();
    cy.visit("/");	
    //cy.wait(12000);
  });
  
  Cypress.Commands.add("clickButton", (buttonName) => {
	  cy.get("[data-cy=" + buttonName + "]").should("be.visible").click();	  
  });
  
  Cypress.Commands.add("forceClickButton", (buttonName) => {
	  cy.get("[data-cy=" + buttonName + "]").should("be.visible").click({ force: true});	  
  });
  
  Cypress.Commands.add("checkWelcome", () => {
	  cy.get('[data-cy="welcomeTitle"]', { timeout: 60000}).should("be.visible");	
  });
  
  
  Cypress.Commands.add("smartExit", () => {
	  cy.get('body').then($body => {
		  if ($body.find('#assistanceNeededPopupViewArea').length === 1) {
			cy.server();
			cy.get("#assistanceNeededPopupViewArea [data-cy=store-login]").click();
			cy.storeLogin();			
			cy.get("[data-cy=store-instructions]").contains("Cancel All Items");
			cy.clickButton("StoreModeButton1");			
			cy.get("[data-cy=store-instructions]").contains("Transaction cancelled. Remove");
			cy.clickButton("StoreModeButton1");			
			cy.checkWelcome();
		  }
		})	
  });
  
  //
  //
  // -- This is a child command --
  // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This is will overwrite an existing command --
  // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
