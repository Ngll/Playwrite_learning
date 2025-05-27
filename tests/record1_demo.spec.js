// import { test, expect } from '@playwright/test';

// test('record demo test', async ({ page }) => {
//     await page.goto('https://saucedemo.com');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();
// });


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Tout refuser' }).click();
  await page.getByRole('combobox', { name: 'Rech.' }).click();
  await page.getByRole('combobox', { name: 'Rech.' }).fill('playwrith');
  await page.getByRole('combobox', { name: 'Rech.' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Rech.' }).fill('playwright automation tool');
});