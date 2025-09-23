//User goes to cars.com
//User is able to see "Imagine the possibilities" 
// title on the homepage
import{Locator,Page, expect} from"@playwright/test"
export class HomepageTitle{

    mainTitle: Locator
    newUsedOption: Locator
    makeOption: Locator
    modelOption: Locator
    distanceOption: Locator
    zipOption: Locator
    showButton: Locator
    yourGarageText: Locator
    addCarText: Locator
    learnMoreLink: Locator
    getStartedButton: Locator
    signInLink: Locator


   
    newCarsLink: Locator


constructor(page: Page){
    this.mainTitle = page.getByText('Imagine the possibilities')
    this.newUsedOption = page.locator('select[name="stock_type"]')
    this.makeOption = page.locator('select[name="makes[]"]')
    this.modelOption = page.locator('select[name="models[]"]')
    this.distanceOption =  page.locator('select[name="maximum_distance"]')
    this.zipOption = page.locator('input[name="zip"]')
    this.showButton = page.locator('spark-button[trid="ispsHAiuJe1hiWnAnf44kA"]')
    this.yourGarageText = page.locator('div[class="widget"] h2[class="spark-heading-3"]')
    this.addCarText = page.locator('div[class="widget"] h3[role="presentation"]')
    this.learnMoreLink = page.locator('a[href="/profile/your-garage"]')
    this.getStartedButton = page.locator('spark-button[id="intake-form-add-car"]')
    this.signInLink = page.locator('spark-button[id="sign-in"]')
   

    this.newCarsLink = page.getByLabel('primary').getByRole('link', { name: 'New Cars' })


}

async mainTitleVisibility():Promise<void>{
    await expect(this.mainTitle).toHaveText('Imagine the possibilities')
}
async searchDropdownOptions(make: string, model: string, distance: string, zipcode: string):Promise<void>{
    await this.makeOption.selectOption(make)
    await this.modelOption.selectOption(model)
    await this.distanceOption.selectOption(distance)
    await this.zipOption.fill("60156")
}
async clickShowButton():Promise<void>{
    await this.showButton.click()
}
async yourCarGarageTextVisibility():Promise<void>{
    await expect(this.yourGarageText).toHaveText("Your Garage")
}
async addCarTextVisibility():Promise<void>{
 await expect(this.addCarText).toHaveText("Add your car. Track its value.")
}

async learnMoreLinkClick():Promise<void>{
    await this.learnMoreLink.click()
}
async getStartedClick():Promise<void>{
    await this.getStartedButton.click()
}
async signInClick():Promise<void>{
    await this.getStartedButton.click()
}
async clickNewCars(){
    await this.newCarsLink.click()
}

}
