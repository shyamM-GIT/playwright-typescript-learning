import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    username = "input#user-name"
    password = "input#password"
    loginButton = "input#login-button"

    async launchURL() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async login(username: string, password: string) {
        await this.fillElement(this.username, username)
        console.log("✅ username entered")
        await this.fillElement(this.password, password)
        console.log("✅ password entered")
        await this.clickElement(this.loginButton)
        console.log("✅ Login button clicked successfully")
    }
    
}