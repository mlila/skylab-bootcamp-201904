describe('login', ()=>{
    beforeEach(()=>{
        cy.visit('http://weatunes.surge.sh')
        cy.contains('Sign In').click()
    })
    it('should login successfully with correct credentials', function() {
        
        cy.get('input[name="username"]')
            .type('john@gmail.com')
            
        cy.get('input[name="password"]')
            .type('123')
            
        cy.contains('Sign In').click()

        cy.url().should('include', '/home')
    })
})