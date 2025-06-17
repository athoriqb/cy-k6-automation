import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import LoginPageActions from '../../pages/loginPage.spec';

Given("I am on the login page", function () {
    LoginPageActions.visit();
});

When('I enter valid credentials', () => {
    cy.fixture("data.json").then((sample) => {
        LoginPageActions.enterUsername(sample.validUsername)
        LoginPageActions.enterPassword(sample.validPassword)
    })
    LoginPageActions.submit();
});

When('I enter an invalid username', () => {
    cy.fixture("data.json").then((sample) => {
        LoginPageActions.enterUsername(sample.invalidUsername)
        LoginPageActions.enterPassword(sample.validPassword)
    })
    LoginPageActions.submit();
});

When('I enter an invalid password', () => {
    cy.fixture("data.json").then((sample) => {
        LoginPageActions.enterUsername(sample.validUsername)
        LoginPageActions.enterPassword(sample.invalidPassword)
    })
    LoginPageActions.submit();
});

Then('I should be redirected to the secure area', () => {
    cy.url().should('include', '/secure');
    LoginPageActions.verifyFlashMessage('You logged into a secure area!');
});

Then('I should see {string}', (message) => {
    LoginPageActions.verifyFlashMessage(message);
});