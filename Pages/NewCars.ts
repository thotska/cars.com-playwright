import{Locator,Page, expect} from"@playwright/test"
 export class NewCars{
     
    mainHeather: Locator


 constructor(page: Page){
    this.mainHeather = page.getByRole('heading', { name: 'Find your next  new car' })
 }

 async mainHeatherVisibility(): Promise<void>{
     expect(this.mainHeather).toHaveText("Find your next new car")
 }

 }