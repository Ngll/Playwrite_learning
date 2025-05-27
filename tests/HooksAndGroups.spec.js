import {test, expect} from '@playwright/test'

//this function of login will run on each page
test.beforeEach(async({page})=>{
    await page.goto('http://www.saucedemo.com/')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

   
});

//Page logout and close.
// test.afterAll(async({page})=>{
//     await page.close()
// });

test('Homepage',async({page})=>{
    await page.goto('http://www.saucedemo.com/')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

});


test('logout',async({page})=>{
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.waitForTimeout(3000);
    await page.waitForURL('https://www.saucedemo.com/')
});
