const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given('User is logged in to GitHub',()=>{
    cy.visit('https://github.com/login');
    cy.get('#login_field').type('devesh2952000@gmail.com');
    cy.get('#password').type('Devesh179@');
    cy.get("input[value='Sign in']").click();
})
When('click on profile photo',()=>{
    cy.get('.Button-label > .avatar').click();

})
// Then(' Then List of options displayed',()=>{
//     cy.get('#item-004a95d2-8ed3-4432-badf-86ebc6d405bc > .ActionListItem-label').should('include','Your repositories');
// })
When('click on your repositories',()=>{
   cy.contains('Your repositories').click();
})
Then('navigate to repositories page',()=>{
    cy.url().should('include','repositories');
})
When('click on repository "devtol_debug_angular"',()=>{
    cy.contains('devtol_debug_angular').click();
})
Then('navigated to that repository page',()=>{
    cy.url().should('include','devtol_debug_angular')
})
When('click on settings button',()=>{
    cy.get("#settings-tab").click();
    cy.get("#settings-tab").click();
    cy.log('setting button is pressed');
})

When('click on the "Delete this repository" button',()=>{
    cy.get("button[id='dialog-show-repo-delete-menu-dialog'] span[class='Button-label']").click();
    cy.log("Delete this repository button clicked");
})
When('click on "I want to delete this repository" button',()=>{
    // cy.wait(5000);
    cy.get("button[id='repo-delete-proceed-button'] span[class='Button-label']").click({force: true});
    cy.log("I want to delete this repository this button clicked");
     
})

When('click on " Read and Understand " button',()=>{
    cy.get("button[id='repo-delete-proceed-button'] span[class='Button-label']").click();
    cy.log('read and understand button clicked')
})
When('enter name of repository "Devesh5555/devtol_debug_angular"',()=>{
    // cy.get('#repo-delete-proceed-button-container > .FormControl > .FormControl-label').should('be.visible');
    cy.get('#verification_field').type('Devesh5555/devtol_debug_angular');
    cy.log("reponame entered");
})
When("click on 'delete this repository' button",()=>{
    cy.contains('Delete this repository').click();
})
When('Enter the password "Devesh179@"',()=>{
    cy.get('#sudo_password').type('Devesh179@')
})
Then('repository should be delete from my GitHub account',()=>{
    cy.get('.js-flash-alert').should('include','successfully deleted');
})