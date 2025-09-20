import {test} from "@playwright/test"
import { TextValidation } from "../CarPages/textValidation"

test("Validating page's text", async ({page}) => {

    let textValidation = new TextValidation(page)
    await page.goto('https://www.cars.com/')
    await textValidation.validatingTest()
})