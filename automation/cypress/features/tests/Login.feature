Feature: Login Functionality Tests

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the secure area

  Scenario: Failed login with invalid username
    Given I am on the login page
    When I enter an invalid username
    Then I should see "Your username is invalid!"

  Scenario: Failed login with invalid password
    Given I am on the login page
    When I enter an invalid password
    Then I should see "Your password is invalid!"