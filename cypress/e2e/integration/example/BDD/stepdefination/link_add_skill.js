const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Actor is on the LinkedIn login page', ()=> {
    
  cy.visit('https://www.linkedin.com/login');
});

When('Actor enter my email or phone as "devesh2952000@gmail"', ()=> {
  const typingDelay = 5000;
  cy.get('#username').type('devesh2952000@gmail.com');
});

When('Actor enter my password as "Devesh5555@"', ()=> {
  cy.get('#password').type('Devesh5555@');
});

When('Actor click the "Sign in" button', ()=>{
  cy.get("button[aria-label='Sign in']").click();
});

Then('Actor should be redirected to the LinkedIn feed',  ()=> {
  cy.url().should('include', '/feed');
  // cy.contains('Feed');
});

When('Actor click on my profile', ()=> {
  cy.get('#ember15 > .global-nav__primary-link-text').click(); 
  cy.contains('View Profile').click({force:true});
});

Then('Actor should be redirected to my LinkedIn profile', ()=> {
  // Cypress code to assert that the profile page is loaded
  cy.url().should('include', '/in');
});

When('Actor click on the plus sign button from skill section', ()=> {
  cy.contains('Add new skill').click();
});

Then('Actor should be redirected to the add skill  page',  ()=> {
  // Cypress code to assert that the skills editing page is loaded
  cy.url().should('include', '/edit/forms/skills/new/');
})

When('Actor click on skill text box and type the skill "Java"', ()=> {
  cy.get("input[id*='profileEditFormElement']").click().type('Java');
});
When('Actor click on the "save" button',()=>{
  cy.get('#ember599').click();
})

Then('Actor should be redirected back to my LinkedIn profile', function () {
  cy.url().should('include', '/in');
});
When("'Java' Skill add in skill section",()=>{
  cy.contains('Java').should('be.visible');
})