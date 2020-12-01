describe('Blog app', function () {
    beforeEach(function (){
        cy.visit('http://localhost:3000')
    })

    it('loginForm can be opened', function (){
        cy.contains('Log in').click()
    })
    it('user can log in', function (){
        cy.contains('Log in').click()
        cy.get('#username').type('bmurph')
        cy.get('#password').type('bmurph')
        cy.get('#login-button').click()
        cy.contains('Ben Murph is logged in')
    })
})