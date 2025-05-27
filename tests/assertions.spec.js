import test, {page, expect} from '@playwright/test'

test('Assertion Demo', async({page})=>{

    await page.goto('https://kitchen.applitools.com/')


    //Assertions
    //Check element present or not
    await expect(page.locator('text= The Kitchen')).toHaveCount(1)

    //if you need to check conditional case
    if( await page.$('text= The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }

    //Check element hidden or visible || Soft used in the syntax lets script to execute even if failed
    await expect (page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //check element enabled or disabled
    await expect (page.locator('text=The Kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()



    //check attribute value || asteriks used below can be indicated for dynamic values in class
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //await page.pause()

    //visual validation

    //await expect(page).toHaveScreenshot()
})