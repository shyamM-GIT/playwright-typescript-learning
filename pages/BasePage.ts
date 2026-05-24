import {test, expect, Page} from '@playwright/test';

export class BasePage {

    page: Page
    constructor(page: Page) {
        this.page = page
    }

    async capturePage(name: string) {

        const screenshot = await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        })

        await test.info().attach(name, {
            body: screenshot,
            contentType: 'image/png'
        })
    }

    async clickElement(selector: string) {
        await this.page.click(selector)
    }

    async fillElement(selector: string, value: string) {
        await this.page.fill(selector, value)
    }

    async selectDropdown(selector: string, value: string) {
        await this.page.selectOption(selector, value)
    }

}