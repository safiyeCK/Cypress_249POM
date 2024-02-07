class LoginPage{
    // Web Elementler
    constructor() {
        this.pageTitle = 'h3'
        
        this.emailInput = '#email'
        this.passwordInput='#password'
        this.loginButton = '[type="submit"]'
        this.pageTitleLogin='[data-test="page-title"]'
    }



    // Metotlar
    verifyPageTitle(pageTitle) {
        cy.get(this.pageTitle).should('have.text', pageTitle)
    }
    
    writeEmail() {
        cy.get(this.emailInput).type('faker123456@faker.com')
    }
    
    writePassword() {
        cy.get(this.passwordInput).type('12345678')
    }
    clickLoginButton() {
        cy.get(this.loginButton).click()
    }
    
    verifyPageTitleLogin() {
        cy.get(this.pageTitleLogin).should('have.text', 'My account')
    }

}

export const login = new LoginPage()