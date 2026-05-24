import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
    
    firstName='[data-test="firstName"]'
    LastName='[data-test="lastName"]'
    postalCode='[data-test="postalCode"]'
    continue='[data-test="continue"]'

    finish='[data-test="finish"]'
    backToProducts='[data-test="back-to-products"]'

    async details(firstName: string, lastName: string, postalCode: string) {
        await this.fillElement(this.firstName, firstName)
        await this.fillElement(this.LastName, lastName)
        await this.fillElement(this.postalCode, postalCode)
        await this.clickElement(this.continue)
        console.log("✅ Details entered successfully")
    }

    async ending(){
        await this.clickElement(this.finish)
        console.log("✅ Finish button clicked successfully")
        console.log("✅ Finished button clicked successfully")
    }

}
