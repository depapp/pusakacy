import LoginPage from '../../support/pages/auth/login.page'
import HomePage from '../../support/pages/home/home.page'

describe('login', () => {

    const loginPage = new LoginPage()
    const homePage = new HomePage()

    beforeEach('navigate to login page', () => {
        loginPage.open()
    })

    it('user should be able to login using valid credentials', () => {
        loginPage.login('standard_user', 'secret_sauce')
        homePage.verify()
    })

})