import{Locator, expect, Page} from "@playwright/test"
 export class TextValidation{
    currentText: Locator

    constructor(page:Page){
        this.currentText = page.locator('spark-stack[class="search-bar-horizontal-or"]')
    }


    async validatingTest():Promise<void>{
        await expect(this.currentText).toHaveText('- Or search by -')
    }
 }