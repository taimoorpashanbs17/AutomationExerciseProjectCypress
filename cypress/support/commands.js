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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress-xpath" />

const jsonAssertion = require("soft-assert");

Cypress.Commands.add("addContext", (context) => {
  cy.log(context);
  cy.once("test:after:run", (test) =>
    addContext({ test }, new Date().toLocaleString() + " - " + context)
  );
});

Cypress.Commands.add("verifyText", (element, textToVerify) => {
  element.then(function (e) {
    const t = e.text();
    expect(t).to.contains(textToVerify);
  });
});

Cypress.Commands.add("verifyURL", (urlToBeExpected) => {
  cy.url().should("eq", urlToBeExpected);
});

Cypress.Commands.add(
  "cypressRequest",
  (methodName, urlToWork, payload = undefined, queryString = undefined) => {
    if (payload != undefined) {
      return cy.request({
        method: methodName,
        url: urlToWork,
        body: payload,
        headers: {
          accept: "application/json",
        },
      });
    } else if (queryString != undefined) {
      return cy.request({
        method: methodName,
        url: urlToWork,
        qs: queryString,
        headers: {
          accept: "application/json",
        },
      });
    } else {
      return cy.request({
        method: methodName,
        url: urlToWork,
        headers: {
          accept: "application/json",
        },
      });
    }
  }
);

Cypress.Commands.add("softAssert", (actual, expected, message) => {
  jsonAssertion.softAssert(actual, expected, message);
  if (jsonAssertion.jsonDiffArray.length) {
    jsonAssertion.jsonDiffArray.forEach((diff) => {
      const log = Cypress.log({
        name: "Soft assertion error",
        displayName: "softAssert",
        message: diff.error.message,
      });
    });
  }
});

Cypress.Commands.add("softAssertAll", () => jsonAssertion.softAssertAll());
