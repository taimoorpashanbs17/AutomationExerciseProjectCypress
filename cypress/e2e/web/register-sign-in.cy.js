/// <reference types="Cypress" />

import Home from "../../pages/HomePage";
import SignUpLogin from "../../pages/SignUpLoginPage";
import SignUp from "../../pages/SignUpPage";
import AccountCreatedDeleted from "../../pages/AccountCreatedDeletedPage";

const home = new Home();
const signUpLogin = new SignUpLogin();
const signUp = new SignUp();
const accountCreatedDeleted = new AccountCreatedDeleted();

let userData;
let texts;
const randomNumber = Math.floor(Math.random() * 10000) + 1;

beforeEach(() => {
  cy.fixture("userData").then((data) => {
    userData = data;
  });

  cy.fixture("texts").then((data) => {
    texts = data;
  });
  home.navigate();
});

describe("Register/ LogIn Test Cases ", () => {
  it("Test Case 1: Register User", () => {
    var first_name = userData.first_name;
    var last_name = userData.last_name;
    var name = first_name + " " + last_name;
    const emailAddress = first_name.toLowerCase() + randomNumber + "@test.com";
    var password = userData.password;
    var day = userData.day;
    var month = userData.month;
    var year = userData.year;
    var company = userData.company;
    var addressOne = userData.address_one;
    var addressTwo = userData.address_two;
    var country = userData.country;
    var state = userData.state;
    var city = userData.city;
    var zipCode = userData.zip_code;
    var mobileNumber = userData.mobile_number;
    var account_created_text = texts.account_created;
    var account_deleted_text = texts.account_deleted;
    home.verifyAutomationExerciseLogoDisplaying();
    home.clickOnSignUpLoginLink();
    signUpLogin.newUserSignUpTextDisplaying();
    signUpLogin.enterNameOnSignUpField(name);
    signUpLogin.enterEmailOnSignUpField(emailAddress);
    signUpLogin.clickOnSignUpButton();
    signUp.verifyEnterAccountInformationTitleDisplaying();
    signUp.enterPassword(password);
    signUp.selectValuesForCalender(day, month, year);
    signUp.clickOnNewsletterCheckBox();
    signUp.enterAddressInformation(
      first_name,
      last_name,
      company,
      addressOne,
      addressTwo,
      country,
      state,
      city,
      zipCode,
      mobileNumber
    );
    signUp.clickOnCreateAccountButton();
    accountCreatedDeleted.verifyAccountStatusText(account_created_text);
    accountCreatedDeleted.clickOnContinueButton();
    home.verifyLoggedInAsUserNameText(name);
    home.clickOnDeleteAccountButton();
    accountCreatedDeleted.verifyAccountStatusText(account_deleted_text);
    accountCreatedDeleted.clickOnContinueButton();
  });

  it("Test Case 2: Login User with correct email and password", () => {
    var email = userData.login_user_email;
    var password = userData.password;
    var user_name = userData.login_user_name
    home.verifyAutomationExerciseLogoDisplaying();
    home.clickOnSignUpLoginLink();
    signUpLogin.verifyLoginToYourAccountTextDisplaying();
    signUpLogin.enterEmailOnLoginField(email)
    signUpLogin.enterPasswordOnLoginField(password)
    signUpLogin.clickonLoginButton();
    home.verifyLoggedInAsUserNameText(user_name);
  })
  it("Test Case 3: Login User with incorrect email and password", () => {
    var first_name = userData.first_name;
    const emailAddress = first_name.toLowerCase() + randomNumber + "@test.com";
    var password = userData.password;
    var incorrect_credentials = texts.incorrect_credentials_message;
    home.verifyAutomationExerciseLogoDisplaying();
    home.clickOnSignUpLoginLink();
    signUpLogin.verifyLoginToYourAccountTextDisplaying();
    signUpLogin.enterEmailOnLoginField(emailAddress)
    signUpLogin.enterPasswordOnLoginField(password)
    signUpLogin.clickonLoginButton();
    signUpLogin.verifyIncorrectEmailAndPasswordText(incorrect_credentials);
  })

  it("Test Case 4: Logout User", () => {
    var email = userData.login_user_email;
    var password = userData.password;
    var user_name = userData.login_user_name
    home.verifyAutomationExerciseLogoDisplaying();
    home.clickOnSignUpLoginLink();
    signUpLogin.verifyLoginToYourAccountTextDisplaying();
    signUpLogin.enterEmailOnLoginField(email)
    signUpLogin.enterPasswordOnLoginField(password)
    signUpLogin.clickonLoginButton();
    home.verifyLoggedInAsUserNameText(user_name);
    home.clickOnLogoutButton();
    signUpLogin.verifyLoginToYourAccountTextDisplaying();
  })
});
