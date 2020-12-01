describe('Blog app', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000')
    })

    it('loginForm is shown', function () {
        cy.contains('Log in').click()
    })

    describe('Login', function () {
        it('successful login', function () {
            cy.contains('Log in').click()
            cy.get('#username').type('bmurph')
            cy.get('#password').type('bmurph')
            cy.get('#login-button').click()
            cy.contains('Ben Murph is logged in')
        })
    })

    describe('When user is logged in', function (){
        beforeEach(function (){
            cy.contains('Log in').click()
            cy.get('#username').type('bmurph')
            cy.get('#password').type('bmurph')
            cy.get('#login-button').click()
            cy.contains('Ben Murph is logged in')
        })
        it('A new blog can be created', function (){

        })
    })
})