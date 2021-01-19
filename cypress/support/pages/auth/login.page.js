const Page = require('../common/page')

const selectors = {
    inputUsername: '#user-name',
    inputPassword: '#password',
    buttonSubmit: '#login-button'
}

class LoginPage extends Page {

    open() {
        return super.open()
    }

    login (username, password) {
        cy.get(selectors.inputUsername).type(username)
        cy.get(selectors.inputPassword).type(password)
        cy.get(selectors.buttonSubmit).click()
    }
    
}

module.exports = new LoginPage()