///<reference types = "Cypress" />

class Home {
  navigate() {
    cy.visit("/");
    cy.addContext("Navigating to Home Page");
  }

  automationExerciseLogo() {
    return cy.get("a > img");
  }

  verifyAutomationExerciseLogoDisplaying() {
    this.automationExerciseLogo().should("exist");
    cy.addContext("Automation Exercise logo is displaying");
  }

  signUpLoginLink() {
    return cy.get(".shop-menu > .nav > :nth-child(4) > a").should("exist");
  }

  clickOnSignUpLoginLink() {
    this.signUpLoginLink().click();
    cy.addContext("Clicked on SignUp/Login Link");
  }

  loggedInAsUserName(){
    return cy.get(':nth-child(10) > a').should("exist")
  }

  verifyLoggedInAsUserNameText(userName){
    var textToVerify = "Logged in as "+userName
    cy.verifyText(this.loggedInAsUserName(), textToVerify)
    cy.addContext(textToVerify+" is displaying at 'Home' screen")
  }

  deleteAccountButton(){
    return cy.get('.shop-menu > .nav > :nth-child(5) > a').should("exist")
  }

  clickOnDeleteAccountButton(){
    this.deleteAccountButton().click()
    cy.addContext("Clicked at 'Delete Button'.")
  }

  logoutButton(){
    return cy.get("a[href='/logout']").should("exist")
  }

  clickOnLogoutButton(){
    this.logoutButton().click()
    cy.addContext("Clicked on 'Log Out' button")
  }
}

module.exports = Home;
