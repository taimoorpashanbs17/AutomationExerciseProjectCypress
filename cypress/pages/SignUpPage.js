/// <reference types="Cypress" />

class SignUp {
  enterAccountInformationTitle() {
    return cy.xpath('//*[@id="form"]//div[1]/h2');
  }

  verifyEnterAccountInformationTitleDisplaying() {
    this.enterAccountInformationTitle().should("exist");
    cy.addContext("'Enter Account Infotmation' title is displaying.");
  }

  passwordField() {
    return cy.get("#password").should("exist");
  }

  enterPassword(password) {
    this.passwordField().type(password);
    cy.addContext(password + " entered as password");
  }

  dayDropDown(dropDownName) {
    return cy.get(dropDownName).should("exist");
  }

  selectValuesForCalender(day, month, year) {
    this.dayDropDown("#days").select(day);
    cy.addContext(day + " as day has been selected.");
    this.dayDropDown("#months").select(month);
    cy.addContext(month + " as Month has been selected.");
    this.dayDropDown("#years").select(year);
    cy.addContext(year + " as Year has been selected.");
  }

  newsletterCheckBox() {
    return cy.get("#newsletter").should("exist");
  }

  clickOnNewsletterCheckBox() {
    this.newsletterCheckBox().check();
    cy.addContext("Newsletter checkbox has been selected.");
  }

  firstNameField() {
    return cy.get("#first_name").should("exist");
  }

  enterFirstName(firstName) {
    this.firstNameField().type(firstName);
    cy.addContext(firstName + " entered on 'First Name' field.");
  }

  lastNameField() {
    return cy.get("#last_name").should("exist");
  }

  enterLastName(lastName) {
    this.lastNameField().type(lastName);
    cy.addContext(lastName + " entered on 'Last Name' field.");
  }

  companyField() {
    return cy.get("#company").should("exist");
  }

  enterCompanyName(companyName) {
    this.companyField().type(companyName);
  }

  addressOneField() {
    return cy.get("#address1").should("exist");
  }

  enterAddressOne(addressOne) {
    this.addressOneField().type(addressOne);
    cy.addContext(addressOne + " entered on 'Address1 field.'");
  }

  addressTwoField() {
    return cy.get("#address2").should("exist");
  }

  enterAddressTwo(addressTwo) {
    this.addressTwoField().type(addressTwo);
    cy.addContext(addressTwo + " entered on 'Address 2' field.");
  }

  countryDropDown() {
    return cy.get("#country").should("exist");
  }

  selectCountry(country) {
    this.countryDropDown().select(country);
    cy.addContext(country + " selected from 'Country' dropdwon.'");
  }

  stateField() {
    return cy.get("#state").should("exist");
  }

  enterState(state) {
    this.stateField().type(state);
    cy.addContext(state + " entered on 'State' field.");
  }

  cityField() {
    return cy.get("#city").should("exist");
  }

  enterCity(city) {
    this.cityField().type(city);
    cy.addContext(city + " entered on 'City' field.");
  }

  zipCodeField() {
    return cy.get("#zipcode").should("exist");
  }

  enterZipCode(zipCode) {
    this.zipCodeField().type(zipCode);
    cy.addContext(zipCode + " entered on 'ZipCode' field.");
  }

  mobileNumberField() {
    return cy.get("#mobile_number").should("exist");
  }

  enterMobileNumber(mobileNumber) {
    this.mobileNumberField().type(mobileNumber);
    cy.addContext(mobileNumber + " entered on 'Mobile Number' field.");
  }

  enterAddressInformation(
    firstName,
    lastName,
    company,
    addressOne,
    addressTwo,
    country,
    state,
    city,
    zipCode,
    mobileNumber
  ) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterCompanyName(company);
    this.enterAddressOne(addressOne);
    this.enterAddressTwo(addressTwo);
    this.selectCountry(country);
    this.enterState(state);
    this.enterCity(city);
    this.enterZipCode(zipCode);
    this.enterMobileNumber(mobileNumber);
  }

  createAccountButton() {
    return cy.get("button[data-qa='create-account']").should("exist");
  }

  clickOnCreateAccountButton() {
    this.createAccountButton().click();
  }
}

module.exports = SignUp;
