Feature: Delete a GitHub repository

As a GitHub user I want to delete a repository from my account So that I can manage my repositories effectively

Scenario: User can Delete an existing repository from its GitHub account
Given User is logged in to GitHub 
   When click on profile photo
   # Then List of options displayed
   When click on your repositories
   Then navigate to repositories page
   When click on repository "devtol_debug_angular"
   Then navigated to that repository page
   When click on settings button
   And click on the "Delete this repository" button
   And click on "I want to delete this repository" button
   And click on " Read and Understand " button
   And enter name of repository "Devesh5555/devtol_debug_angular"
   And click on 'delete this repository' button
   And Enter the password "Devesh179@"
   Then repository should be delete from my GitHub account  
 