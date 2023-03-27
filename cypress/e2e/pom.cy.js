import {LoginPage} from './pages/login_page'

const Login = new LoginPage()

describe('Login tests', () => {

    beforeEach( () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('Login with valid credentials', () => {

        Login.enterUsername('Admin')
        Login.enterPassword('admin123')
        Login.clickLogin()
        Login.clickDropdown()
        Login.clickLogout()
    })

    it('Login with invalid credentials', () => {

        Login.enterUsername('Admin')
        Login.enterPassword('123admin')
        Login.clickLogin()
        let invCreds = 'Invalid credentials'
        expect (invCreds).to.be.equal('Invalid credentials')
    })
})