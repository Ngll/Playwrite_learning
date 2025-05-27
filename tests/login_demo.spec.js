import {test, expect} from '@playwright/test'

test('Demo login test', async({page}) =>{
    await page.goto('https://demo.applitools.com/')
    await page.locator('[placeholder="Enter your username"]').fill('raghav')
    await page.locator('[placeholder="Enter your password"]').fill('raghav')
    await page.waitForSelector ('text=Sign in', {timeout:5000})
    await page.locator('text=Sign in').click()

})

test ('Demo login test 2', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause()
})

// test('Demo login test 3', async({page}) =>{
//     await page.pause()
    
// })