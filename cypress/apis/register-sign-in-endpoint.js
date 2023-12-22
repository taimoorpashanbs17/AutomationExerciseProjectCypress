/// <reference types="Cypress" />

let endPoints;
import APIUtils from "./apiUtils";

let apiUtils = new APIUtils();

beforeEach(() => {
  cy.fixture("api_end_points").then((data) => {
    endPoints = data;
  });
});

class RegisterSignInEndPoint {
  urlToTest() {
    var baseURL = Cypress.config("baseUrl");
    var verifyLoginPath = endPoints.verify_login;
    var fullPath = baseURL + verifyLoginPath;
    return fullPath;
  }

  verifyStatusCodeOfSignIn(statusCode) {
    apiUtils.verifyStatusCode(
      "POST",
      this.urlToTest(),
      { email: "login_user_123@test.com", password: "Test@12345" },
      undefined,
      statusCode
    );
    cy.addContext("Status Code of " + this.urlToTest() + " is " + statusCode);
  }

  verifyBodyHasProperty(propertyName, propertyValue) {
    apiUtils.verifyBodyContains(
      "POST",
      this.urlToTest(),
      { email: "login_user_123@test.com", password: "Test@12345" },
      undefined,
      propertyName,
      propertyValue
    );
  }
}

module.exports = RegisterSignInEndPoint;
