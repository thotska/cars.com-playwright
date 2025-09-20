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


constructor(page: Page){
    this.mainTitle = page.locator('h1[class="hero-title "]')
    this.newUsedOption = page.locator('select[name="stock_type"]')
    this.makeOption = page.locator('select[name="makes[]"]')
    this.modelOption = page.locator('select[name="models[]"]')
    this.distanceOption =  page.locator('select[name="maximum_distance"]')
    this.zipOption = page.locator('input[name="zip"]')
    
}

async mainTitleVisibility():Promise<void>{
    await expect(this.mainTitle).toHaveText('Imagine the possibilities')
}

async newUsedSelect():Promise<void>{
    await this.newUsedOption.click()
    await this.newUsedOption.selectOption("New")
}
async makeSelect():Promise<void>{

    await this.makeOption.click()
    await this.makeOption.selectOption("Chevrolet")
}
async modelSelect():Promise<void>{
    await this.modelOption.click()
    await this.modelOption.selectOption("Equinox EV")

}
 async distanceSelect():Promise<void>{
    await this.distanceOption.click()
    await this.distanceOption.selectOption("20 miles")

}
 async zipFill(){
    await this.zipOption.fill("60156")
 }

 async clickShowButton(){
     await this.s

 }


}




//  export class TextValidation{
//     currentText: Locator

//     constructor(page:Page){
//         this.currentText = page.locator('spark-stack[class="search-bar-horizontal-or"]')
//     }


//     async validatingTest():Promise<void>{
//         await expect(this.currentText).toHaveText('- Or search by -')
//     }
//  }