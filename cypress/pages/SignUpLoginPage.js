///<reference types = "Cypress" />

class SignUpLogin {
  newUserSignUpTextDisplaying() {
    cy.get(".signup-form > h2").should("exist");
    cy.addContext("'New User Sign Up!' Text is displaying ");
  }

  signUpNameField() {
    return cy.get('[data-qa="signup-name"]').should("exist");
  }

  enterNameOnSignUpField(name) {
    this.signUpNameField().type(name);
    cy.addContext("Entered "+name+" on 'Name' field.")
  }

  signUpEmailField() {
    return cy.get('[data-qa="signup-email"]').should("exist");
  }

  enterEmailOnSignUpField(email) {
    this.signUpEmailField().type(email);
    cy.addContext("Entered "+email+" on 'Email' field.")
  }

  signUpButton() {
    return cy.get('[data-qa="signup-button"]').should("exist");
  }

  clickOnSignUpButton() {
    this.signUpButton().click();
    cy.addContext("Clicked on Sign Up Button")
  }

  verifyLoginToYourAccountTextDisplaying(){
    cy.get('.login-form > h2').should("exist")
    cy.addContext("'Login to your Account!' text is displaying")
  }

  loginEmailField(){
    return cy.get('[data-qa="login-email"]').should("exist")
  }

  enterEmailOnLoginField(email){
    this.loginEmailField().type(email)
    cy.addContext(email+ " has entered on 'Email' field")
  }

  loginPasswordField(){
    return cy.get('[data-qa="login-password"]').should("exist")
  }

  enterPasswordOnLoginField(password){
    this.loginPasswordField().type(password)
    cy.addContext(password+" has entered on 'Password' field.")
  }

  loginButton(){
    return cy.get('[data-qa="login-button"]').should("exist")
  }

  clickonLoginButton(){
    this.loginButton().click()
    cy.addContext("Clicked on 'Login' button.")
  }

  incorrectEmailAndPassword(){
    return cy.get('.login-form > form > p').should("exist")
  }

  verifyIncorrectEmailAndPasswordText(text){
    cy.verifyText(this.incorrectEmailAndPassword(), text)
    cy.addContext(text +" text is displaying")
  }

}

module.exports = SignUpLogin;
