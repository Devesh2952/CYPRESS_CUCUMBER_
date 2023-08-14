import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Actor is on homepage", ()=>{
cy.visit('https://www.google.co.in/');

});
When('Actor click search box and Enter "T shirt" ', () => { 
  cy.get("#search_query_top").type("T-shirt");
  cy.get("button[name='submit_search']").click();
  });

Then("Actor navigate to product page", () => {
    cy.get(".lighter").contains("T-shirt");

  //   cy.sqlServer('SELECT * FROM Employees').then((result) => {
            
  //     expect(result).to.have.lengthOf(5);
  // console.log(result);
        // });
  });