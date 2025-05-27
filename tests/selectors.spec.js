import{test, expect} from '@playwright/test'

test('selectors Demo', async({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    //Using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('edition')

    //using css selector
    await page.locator('#login-button').click()

    //using x-path
    await page.locator('xpath=//input[@name="password"]').fill('farady')
    await page.locator('//input[@name="password"]').fill('farady')
     
    //using text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

})