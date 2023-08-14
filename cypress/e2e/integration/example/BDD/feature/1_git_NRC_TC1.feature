Feature: Create New Repository on GitHub

 Scenario: User creates a new repository with valid details
 Given user is logged in to GitHub
  When user click on new repository option
  Then Navigate to create repository page
  When enter valid repository name as "devtol_debug_angular"  
  And enter description for repository
  And selects the repository visibility public
  And click to add README file to initializes
  And select file to add gitignore from dropdown
  And select license from dropdown
  And clicks on the Create repository button
  Then the new repository should be successfully created
  And the user should be redirected to the repository's main page
#   Then: repository created successfully and redirected to repository's main page