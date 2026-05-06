import { test, expect } from '@playwright/test'

test('My First Playwright Test', async ({ page }) => {
  
  // Step 1 - Open browser
  await page.goto("https://www.saucedemo.com/")
  console.log("✅ Opened saucedemo")

  // Step 2 - Assert title
  await expect(page).toHaveTitle(/Swag Labs/);
  console.log("✅ Title verified")

  // Step 3 - Take screenshot
  await page.screenshot({ path: "screenshot.png" })
  console.log("✅ Screenshot taken")


  const userName=page.locator("input#user-name")
  const passWord=page.locator("input#password")
  const login=page.locator("input#login-button")
  await userName.fill("standard_user")
    console.log("✅ username entered")
  await passWord.fill("secret_sauce")
    console.log("✅ password entered")
  await login.click()
    console.log("✅ Login successfully")

  await expect(page).toHaveTitle(/Swag Labs/)
  console.log("✅ Title verified")

 

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  // Scroll to bottom of page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click()
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.locator("a.shopping_cart_link").click()

  await page.locator("#checkout").click()

  await page.locator('[data-test="firstName"]').fill("Shyam")

  await page.locator('[data-test="lastName"]').fill("Kumar")
  
  await page.locator('[data-test="postalCode"]').fill("500032")

  await page.locator('[data-test="continue"]').click()

  let total= await page.locator('[data-test="total-label"]').textContent()
  console.log('✅ ' + total)

  await page.locator('[data-test="finish"]').click()

  let confirm= await page.locator('[data-test="complete-header"]').textContent()
  console.log('✅ '+confirm)

  await page.locator('[data-test="back-to-products"]').click()

})