import { test } from "@playwright/test"
import { HomepageTitle } from "../Pages/homepage"

test("Homepage title validation", async ({ page }) => {
    let homepageTitle = new HomepageTitle(page)
    await page.goto('https://www.cars.com/')
    await homepageTitle.mainTitleVisibility()
    await homepageTitle.searchDropdownOptions("bmw", "bmw-m4", "20", "60152")
    await homepageTitle.clickShowButton()

})

test("Main heather visibility verification", async ({page} )=> {
    let homepageTitle = new HomepageTitle(page)
    await page.goto('https://www.cars.com/')
    await homepageTitle.clickNewCars()
    await homepageTitle.mainHeatherVisibility()
})

