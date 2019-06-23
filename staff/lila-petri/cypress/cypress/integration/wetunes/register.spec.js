describe('register', ()=>{
    beforeEach(()=>{
        cy.visit('http://weatunes.surge.sh')
        cy.contains('Sign Up').click()
    })
    it('should register successfully with correct credentials', function() {
        let email = `john-${Math.random()}@gmail.com`
        
        cy.get('input[name="name"]')
            .type('John')

        cy.get('input[name="surname"]')
            .type('Smith')

        cy.get('input[name="username"]')
            .type(email)
            
        cy.get('input[name="password"]')
            .type('123')

        cy.get('select')
            .select('Barcelona')
            
        cy.contains('Sign Up').click()

        cy.url().should('include', '/login')
    })
})