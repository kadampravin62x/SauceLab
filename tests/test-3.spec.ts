import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://batch-test.kyc360.com/Account/Login?ReturnUrl=%2F%3F__BusinessUnit%3D10');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('tejalupare+clienttest1@riskscreen.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('pizzahut@22');
  await page.getByRole('button', { name: 'Enter KYC360 (TEST)' }).click();
  await page.getByRole('button', { name: 'Prospect Onboarding' }).click();
  await page.locator('#headerDIV').getByRole('link', { name: 'Onboarding Types' }).click();
  await page.getByRole('link', { name: 'Add a new onboarding type' }).click();
  await page.getByRole('textbox', { name: 'Name*' }).fill('test Vs360');
  //await page.getByRole('textbox', { name: 'Description*' }).click();
  await page.getByRole('textbox', { name: 'Description*' }).fill('test VS360');
  await page.locator('#OnboardingType_LowRiskCriteriaID').selectOption('299');
  await page.locator('#OnboardingType_StandardRiskCriteriaID').selectOption('299');
  await page.locator('#OnboardingType_HighRiskCriteriaID').selectOption('299');
  await page.locator('#OnboardingType_VeryHighRiskCriteriaID').selectOption('299');
  await page.locator('#OnboardingType_LowRiskClientEntityRiskID').selectOption('203');
  await page.locator('#OnboardingType_StandardRiskClientEntityRiskID').selectOption('204');
  await page.locator('#OnboardingType_HighRiskClientEntityRiskID').selectOption('205');
  await page.locator('#OnboardingType_VeryHighRiskClientEntityRiskID').selectOption('205');
  await page.getByRole('button', { name: 'Add Onboarding Type' }).click();
});