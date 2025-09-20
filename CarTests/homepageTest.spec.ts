import { test } from "@playwright/test"
import { HomepageTitle } from "../CarPages/homepage"

test("Homepage title validation", async ({ page }) => {
    let homepageTitle = new HomepageTitle(page)
    await page.goto('https://www.cars.com/')
    await homepageTitle.mainTitleVisibility()
})



// import { TextValidation } from '../CarPages/homepage'

// test("Validating page's text", async ({page}) => {

//     let textValidation = new TextValidation(page)
//     await page.goto('https://www.cars.com/')
//     await textValidation.validatingTest()
// })
