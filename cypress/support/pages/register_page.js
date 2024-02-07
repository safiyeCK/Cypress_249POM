class RegisterPage {
    // Web Elementleri
    constructor() {
        this.firstNameInput = '#first_name'
        this.lastNameInput = '#last_name'
        this.dateOfBirthInput = '#dob'
        this.addressInput = '#address'
        this.postCodeInput = '#postcode'
        this.cityInput = '#city'
        this.stateInput = '#state'
        this.countrySelect = '#country'
        this.phoneInput = '#phone'
        this.emailInput = '#email'
        this.passwordInput = '#password'
        this.registerButton = '[type="submit"]'
        this.emailAlreadyExistMessage ='.help-block'
        this.passwordMinLengthErrorMessage='[data-test="password-error"]'

        this.requiredFirstNameMessage='[data-test="first-name-error"]'
        this.requiredLastNameMessage='[data-test="last-name-error"]'
        this.requiredDateOfBirthMessage='[data-test="dob-error"]'
        this.requiredAddressMessage='[data-test="address-error"]'
        this.requiredPostCodeMessage='[data-test="postcode-error"]'
        this.requiredCityMessage='[data-test="city-error"]'
        this.requiredStateMessage='[data-test="state-error"]'
        this.requiredCountryMessage='[data-test="country-error"]'
        this.requiredPhoneMessage='[data-test="phone-error"]'
        this.requiredEmailMessage='[data-test="email-error"]'
        this.requiredPasswordMessage='[data-test="password-error"]'
        


    }


    // Metotlar
    writeFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName)
    }

    writeLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName)
    }

    writeDateOfBirth(dateOfBirth) {
        cy.get(this.dateOfBirthInput).type(dateOfBirth)
    }

    writeAddress(address) {
        cy.get(this.addressInput).type(address)
    }

    writePostCode(postCode) {
        cy.get(this.postCodeInput).type(postCode)
    }

    writeCity(city) {
        cy.get(this.cityInput).type(city)
    }

    writeState(state) {
        cy.get(this.stateInput).type(state)
    }

    selectCountry(country) {
        cy.get(this.countrySelect).select(country)
    }

    writePhone(phone) {
        cy.get(this.phoneInput).type(phone)
    }

    writeEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    writePassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    clickRegister() {
        cy.get(this.registerButton).click()
    }

    verifyEmailAlreadyExist(errorMessage) {
        cy.get(this.emailAlreadyExistMessage).should('have.text', errorMessage)
    }

    verifyPasswordMinLengthErrorMessage(passwordMinLengthErrorMessage){
        cy.get(this.passwordMinLengthErrorMessage).should('contain', passwordMinLengthErrorMessage)
    }

    verifyRequiredFirstNameMessage(requiredFirstNameMessage){
        cy.get(this.requiredFirstNameMessage).should('contain', requiredFirstNameMessage)
    }
    verifyRequiredLastNameMessage(requiredLastNameMessage){
        cy.get(this.requiredLastNameMessage).should('contain', requiredLastNameMessage)
    }
    verifyRequiredDateOfBirthMessage(requiredDateOfBirthMessage){
        cy.get(this.requiredDateOfBirthMessage).should('contain', requiredDateOfBirthMessage)
    }
    verifyRequiredAddressMessage(requiredAddressMessage){
        cy.get(this.requiredAddressMessage).should('contain', requiredAddressMessage)
    }
    verifyRequiredPostCodeMessage(requiredPostCodeMessage){
        cy.get(this.requiredPostCodeMessage).should('contain', requiredPostCodeMessage)
    }
    verifyRequiredCityMessage(requiredCityMessage){
        cy.get(this.requiredCityMessage).should('contain', requiredCityMessage)
    }
    verifyRequiredStateMessage(requiredStateMessage){
        cy.get(this.requiredStateMessage).should('contain', requiredStateMessage)
    }
    verifyRequiredCountryMessage(requiredCountryMessage){
        cy.get(this.requiredCountryMessage).should('contain', requiredCountryMessage)
    }
    verifyRequiredPhoneMessage(requiredPhoneMessage){
        cy.get(this.requiredPhoneMessage).should('contain', requiredPhoneMessage)
    }
    verifyRequiredEmailMessage(requiredEmailMessage){
        cy.get(this.requiredEmailMessage).should('contain', requiredEmailMessage)
    }
    verifyRequiredPasswordMessage(requiredPasswordMessage){
        cy.get(this.requiredPasswordMessage).should('contain', requiredPasswordMessage)
    }


   
    




}
export const register = new RegisterPage()