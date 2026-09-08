import {test as base} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/productPage'
import { CheckoutPage } from '../pages/checkoutPage'
import { ResultsPage } from  '../pages/resultsPage'

type MyFixtures = {
    loginPage: LoginPage,
    productPage: ProductPage,
    checkoutPage: CheckoutPage,
    resultsPage: ResultsPage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    productPage : async ({ page }, use) => {
        await use(new ProductPage(page))
    },

    checkoutPage : async ({ page }, use ) => {
        await use (new CheckoutPage(page))
    
    },

    resultsPage : async ({ page }, use ) => {
        await use (new ResultsPage(page))
    
    }
})