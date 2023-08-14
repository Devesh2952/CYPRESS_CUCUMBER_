Feature: LinkedIn Login and Profile Update

  Scenario: Log in to LinkedIn and add a skill to the profile
    Given Actor is on the LinkedIn login page
    When Actor enter my email or phone as "devesh2952000@gmail"
    And Actor enter my password as "Devesh5555@"
    And Actor click the "Sign in" button
    Then Actor should be redirected to the LinkedIn feed
    And Actor click on my profile
    Then Actor should be redirected to my LinkedIn profile
    When Actor click on the plus sign button from skill section 
    Then Actor should be redirected to the add skill  page
    And Actor click on skill text box and type the skill "Java"
    And Actor click on the "save" button
    Then Actor redirected to Add another skill page 
    And Actor click on No thanks button 
    Then Actor should be redirected back to my LinkedIn profile
    And 'Java' Skill add in skill section

   Scenario : Actor Can delete its priviously added skill from profile
	Given Actor is on the LinkedIn login page
    When Actor enter my email or phone as "devesh2952000@gmail"
    And Actor enter my password as "Devesh5555@"
    And Actor click the "Sign in" button
  	Then Actor should be redirected to the LinkedIn feed
    And Actor click on my profile
    Then Actor should be redirected to my LinkedIn profile
	  When Actor click on Pancile sign button from skill section
	  Then Actor redirected to Skill page 
    When Actor is click on Pancile sign near to java 
	  Then redirected to edit education 
	  When Actor click on Delete Skill button
	  And Actor click on Delete button 
	  Then Deletion was successful this massege appear