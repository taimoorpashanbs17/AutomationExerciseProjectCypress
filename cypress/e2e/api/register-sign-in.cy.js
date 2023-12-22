/// <reference types="Cypress" />

import RegisterSignInEndPoint from "../../apis/register-sign-in-endpoint";

let registerSignInEndPoint = new RegisterSignInEndPoint();
let endPoints;

beforeEach(() => {
  cy.fixture("api_end_points").then((data) => {
    endPoints = data;
  });
});

describe("Register/ LogIn API Test Cases", () => {
  it("API 7: POST To Verify Login with valid details", () => {
    registerSignInEndPoint.verifyStatusCodeOfSignIn(200)
    registerSignInEndPoint.verifyBodyHasProperty('responseCode', 200);
    registerSignInEndPoint.verifyBodyHasProperty('message', "User exists!");
  });

  it("API 8: POST To Verify Login without email parameter", () => {
    registerSignInEndPoint.verifyBodyHasProperty('responseCode', 400);
    registerSignInEndPoint.verifyBodyHasProperty('message', "Bad request, email or password parameter is missing in POST request.");
  });
});
