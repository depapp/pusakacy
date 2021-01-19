const LoginPage = require('../../support/pages/auth/login.page')
const HomePage = require('../../support/pages/home/home.page')

describe('login', () => {

    beforeEach('navigate to login page', () => {
        LoginPage.open()
    })

    it('user should be able to login using valid credentials', () => {
        LoginPage.login('standard_user', 'secret_sauce')
        HomePage.verify()
    })

})