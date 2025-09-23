import {test} from '@playwright/test'
import { NewCars } from '../Pages/NewCars'

test("Main heather visibility verification", async ({page} )=> {
    let newCars =  new NewCars(page)
    await page.goto('https://www.cars.com/new-cars/')
    await newCars.mainHeatherVisibility() 
})