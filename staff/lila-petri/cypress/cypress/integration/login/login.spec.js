describe('login test suite', function() {
    beforeEach(()=>{
        cy.visit('https://docplanner.miodottore.it')
    })
    it('should fail on incorrect email', ()=>{
        cy.get('input[name="_username"]')
            .type('qait.privdoc@doctoralia')
        cy.get('input[name="_password"]')
            .type('QAdoctoralia')
        cy.contains('Login').click()
        cy.contains('Credenziali non valide.')

    })
    it('should fail on incorrect password', ()=>{
        cy.get('input[name="_username"]')
            .type('qait.privdoc@doctoralia.com')
        cy.get('input[name="_password"]')
            .type('xxxxx')
        cy.contains('Login').click()
        cy.contains('Credenziali non valide.')

    })
    it('should login successfully with correct credentials', function() {
        
        cy.get('input[name="_username"]')
            .type('qait.privdoc@doctoralia.com')

        cy.get('input[name="_password"]')
            .type('QAdoctoralia')
            
        cy.contains('Login').click()

        cy.url().should('include', '/calendar/week')
    })
})