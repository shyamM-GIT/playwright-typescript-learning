import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ResultsPage extends BasePage{

    orderConfirm='[data-test="complete-header"]'
    backToProducts='[data-test="back-to-products"]'

    async finalValidation(){
        await this.verifyText(this.orderConfirm,'Thank you for your order!')
        await this.clickElement(this.backToProducts)

    }
}