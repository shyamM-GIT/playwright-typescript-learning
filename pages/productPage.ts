import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
    dropdown='[data-test="product-sort-container"]'
    bagpack='[data-test="add-to-cart-sauce-labs-backpack"]'
    backlight='[data-test="add-to-cart-sauce-labs-bike-light"]'

    addtocart="a.shopping_cart_link"
    checkout="#checkout"

    async sortByName(value: string) {
        await this.selectDropdown(this.dropdown, value)
        console.log("✅ Sorted by name successfully")
    }
    async addToCart() {
        await this.clickElement(this.bagpack)
        await this.clickElement(this.backlight)
        await this.clickElement(this.addtocart)
        await this.clickElement(this.checkout)
        console.log("✅ Checkout initiated successfully")
    }


}