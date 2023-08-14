const { Then } = require("@badeball/cypress-cucumber-preprocessor");


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

  When('Actor click on Pancile sign button from skill section',()=>{
    cy.get('li-icon[aria-label="View skills detail screen"]').click();
  });
  Then("Actor redirected to Skill page ",()=>{
    cy.url().should('include','/details/skills/')
  });
  When('Actor is click on Pancile sign near to java',()=>{
    cy.get('li-icon[aria-label="Edit Java"]').click();
  });

  Then('redirected to edit education',()=>{
        cy.url().should('include','/edit/forms/');
    });

  When('Actor click on Delete Skill button',()=>{
    cy.contains('Delete skill').click();
   });
  When('Actor click on Delete button',()=>{
    cy.contains('Delete').click();
  });
  Then('Deletion was successful this massege appear',()=>{
    cy.contains('Deletion was successful.').should('be.visible');
  })

  