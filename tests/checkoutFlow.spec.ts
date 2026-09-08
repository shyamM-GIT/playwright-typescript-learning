import { test } from '../Fixtures/BaseTest'
import { expect } from '@playwright/test'


import { LoginPage } from '../pages/LoginPage'
import { CheckoutPage } from '../pages/checkoutPage'
import { ProductPage } from '../pages/productPage'
import { ResultsPage } from '../pages/resultsPage'



test(`Verify login functionality`, async ({ page,loginPage,productPage,checkoutPage,resultsPage }) => {

    await loginPage.launchURL()
    await loginPage.capturePage('Login Page')

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    )

    await loginPage.capturePage('Products Page')

    await productPage.sortByName('lohi')
    await productPage.capturePage('Sorted Products Page')

    await productPage.addToCart()
    await productPage.capturePage('Cart Page')

    await checkoutPage.details(
        'Shyam',
        'Kumar',
        '500032'
    )
    await checkoutPage.capturePage('Details Page')

    await checkoutPage.ending()
    await checkoutPage.capturePage('Ending Page')  

    await resultsPage.finalValidation()

})
