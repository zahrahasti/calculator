

beforeEach("reload the page",()=>{
     cy.loadPage()
})
it('reset', () => {
    
    cy.dataCy("reset").click();
    cy.dataCy("calc-output").should('have.text', '');
    cy.dataCy("operator").each(($operator)=>{
        cy.wrap($operator).should("have.class","no-allow")
    })
  });