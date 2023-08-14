const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// const { when } = require("cypress/types/jquery");


Given('user is logged in to GitHub',()=>{
    cy.visit('https://github.com/login');
    cy.get('#login_field').type('devesh2952000@gmail.com');
    cy.get('#password').type('Devesh179@');
    cy.get("input[value='Sign in']").click();
})
When('user click on new repository option',()=>{
    cy.get("#global-create-menu-button").click();
    cy.contains('New repository').click();

})
Then('Navigate to create repository page',()=>{
    cy.url().should('include','/new');
    cy.log("navigation completed");
})

When('enter valid repository name as "devtol_debug_angular"',()=>{
    cy.log('finding repo name text box');
    cy.get("#react-aria-2").type('devtol_debug_angular');
})
When('enter description for repository',()=>{
    cy.get('#react-aria-3').type('This repository will help to identify error in complex code devloped in angular framework');
 
})
When('selects the repository visibility public',()=>{
cy.get('#react-aria-5').click();

})
When('click to add README file to initializes',()=>{
    cy.get('#react-aria-8').click();
})
When('select file to add gitignore from dropdown',()=>{
    cy.contains('.gitignore template').click();
    cy.get('input[aria-label="Template filter"]').type('java');
    cy.contains('Java').click({force:true});

})
When('select license from dropdown',()=>{
    cy.contains('None').click();
    cy.get('input[aria-label="License filter"]').type('apache');
    cy.contains('Apache License 2.0').click();


})
When('clicks on the Create repository button',()=>{
    cy.get("button[class='types__StyledButton-sc-ws60qy-0 cFoFUL']").click({force:true});   
    cy.log('create button is pressed');
})
Then('the new repository should be successfully created',()=>{
    cy.wait(10000);
    cy.url().should('include','/devtol_debug_angular');
    cy.log('new repository created succesfully')
})
When("the user should be redirected to the repository's main page",()=>{
    cy.url().should('include','/devtol_debug_angular');
})