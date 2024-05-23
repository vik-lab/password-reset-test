Feature: Password Reset

  Scenario: Successful password reset
    Given I am on the password reset page
    When I enter a valid email
    And I submit the form
    Then I should see a confirmation message

  Scenario: Unsuccessful password reset with invalid email
    Given I am on the password reset page
    When I enter an invalid email
    And I submit the form
    Then I should see an error message