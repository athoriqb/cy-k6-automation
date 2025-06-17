class loginPage{
    get usernameField() {return cy.get("#username")}
    get passwordField() {return cy.get("#password")}
    get submitButton() {return cy.get("button[type=\"submit")}
    get flashMessage() {return cy.get("#flash")}

    visit(path = '/login') {
        cy.visit(path);
    }

    enterUsername(username) {
        this.usernameField.type(username);
    }

    enterPassword(password) {
        this.passwordField.type(password);
    }

    submit() {
        this.submitButton.click();
    }

    verifyFlashMessage(expectedText) {
        this.flashMessage
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const cleanText = text.replace(/\s+/g, ' ').replace(/[×*]/g, '').trim();
                expect(cleanText).to.contain(expectedText);
            });
    }
}
const loginpage = new loginPage()
export default loginpage