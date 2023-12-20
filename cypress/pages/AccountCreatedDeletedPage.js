/// <reference types = "cypress"/>

class AccountCreatedDeleted {
  verifyAccountStatusTextDisplaying() {
    return cy.get("b").should("exist");
  }

  verifyAccountStatusText(text) {
    cy.verifyText(this.verifyAccountStatusTextDisplaying(), text);
    cy.addContext(text + " text was displaying after account creation.");
  }

  continueButton() {
    return cy.get('[data-qa="continue-button"]').should("exist");
  }

  clickOnContinueButton() {
    this.continueButton().click();
    cy.addContext("Clicked on 'Continue' button");
  }
}

module.exports = AccountCreatedDeleted;
