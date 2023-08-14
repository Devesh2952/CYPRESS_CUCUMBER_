import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.get('input[role="combobox"]').should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );

  cy.task("queryDb",'SELECT * FROM student_results')
        .then(count => {
            expect(count).to.have.lengthOf(5);
            cy.log('DB records count is => '+ count);
          });

      //     cy.sqlServer('SELECT * FROM contacts').then((result) => {
            
      //       expect(result).to.have.lengthOf(8);
      //   console.log(result);
      // });
  
});