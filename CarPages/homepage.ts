//User goes to cars.com
//User is able to see "Imagine the possibilities" 
// title on the homepage
import{Locator,Page, expect} from"@playwright/test"
export class HomepageTitle{

    mainTitle: Locator

constructor(page: Page){
    this.mainTitle = page.locator('h1[class="hero-title"]')
}

async mainTitleVisibility(){
    await expect(this.mainTitle).toHaveText('Imagine the possibilities')
}
}
