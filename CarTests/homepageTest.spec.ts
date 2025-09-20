import { test } from "@playwright/test"
import { HomepageTitle } from "../CarPages/homepage"

test("Homepage title validation", async ({ page }) => {
    let homepageTitle = new HomepageTitle(page)
    await page.goto('https://www.cars.com/')
    await homepageTitle.mainTitleVisibility()
})
