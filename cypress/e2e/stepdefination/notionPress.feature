Feature: Validate Login Functionality

  Scenario: Validate login with valid credentials
    Given I am on the login page
    When I enter my email as "devesh8928@gmail.com"
    And I enter my password as "9168155179"
    And I click on the login button
    And I click on the profile mobile image
    Then I should perform assertions for successful login if applicable