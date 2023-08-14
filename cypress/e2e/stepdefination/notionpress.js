const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const { Given, When, Then } = require('cucumber');

Given('I am on the login page', function () {
  cy.visit('https://notionpress.com/en/ind/login');
});

When('I enter my email as {string}', function (email) {
  cy.get('#email').type("saurabh.simple100@gmail.com");
});

When('I enter my password as {string}', function (password) {
  cy.get('#dpassword').type(7999946048);
});

When('I click on the login button', function () {
  cy.get('#login').click();
});

When('I click on the profile mobile image', function () {
  cy.get('#profile_mobile_img > .fa').click();
});

Then('I should perform assertions for successful login if applicable', function () {
  // Add assertions for successful login if applicable
});