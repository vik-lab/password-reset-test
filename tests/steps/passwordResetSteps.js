import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import PasswordResetPage from '../pages/PasswordResetPage.js';

let passwordResetPage;

Given('I am on the password reset page', async function() {
  passwordResetPage = new PasswordResetPage(this.page);
  await passwordResetPage.navigate();
});

When('I enter a valid email', async function() {
  await passwordResetPage.enterEmail('valid@example.com');
});

When('I enter an invalid email', async function() {
  await passwordResetPage.enterEmail('invalid-email');
});

When('I submit the form', async function() {
  await passwordResetPage.submitForm();
});

Then('I should see a confirmation message', async function() {
  const isVisible = await passwordResetPage.isSuccessMessageVisible();
  expect(isVisible).toBe(true);
});

Then('I should see an error message', async function() {
  const isVisible = await passwordResetPage.isErrorMessageVisible();
  expect(isVisible).toBe(true);
});