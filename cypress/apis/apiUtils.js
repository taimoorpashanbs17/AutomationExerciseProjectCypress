/// <reference types="Cypress" />

class APIUtils {
  verifyStatusCode(methodName, urlToWork, payload = undefined, queryString = undefined, statusCode) {
        cy.cypressRequest(methodName, urlToWork, payload = undefined, queryString = undefined).should((response) => {
            expect(response.status).to.eql(statusCode)})
  }

  verifyBodyContains(methodName, urlToWork, payload = undefined, queryString = undefined, propertyToVerify, textToVerify){
    cy.cypressRequest(methodName, urlToWork, payload = undefined, queryString = undefined).then((response) => {
      expect(JSON.parse(response.body)).have.property(propertyToVerify)
      cy.addContext(propertyToVerify+" property is in "+urlToWork+" response")
      expect(JSON.parse(response.body)[propertyToVerify]).to.eq(textToVerify)
      cy.addContext(textToVerify+" value of "+propertyToVerify+" is showing within response.")
  });
  }
}

module.exports = APIUtils;
