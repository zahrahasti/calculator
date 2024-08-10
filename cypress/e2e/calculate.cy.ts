import { errorDevideByZero , invalidFormatError } from '../../src/assets/ts/modules/calculate';
beforeEach("load the page",()=>{
    cy.loadPage()
})

describe("click on the equal button",()=>{
    it("show invalid error when calc output is empty",()=>{
       cy.dataCy("btn-equal").click()
       cy.dataCy("calc-output").invoke('text').then(txt=>{
        if(txt===""){
             cy.dataCy("invalid").invoke('text').should('equal',invalidFormatError);
        }
       })
        
    })

    // 
    it("show error when we entered wrong numbers",()=>{
        const testOutputContext="2/0"
        cy.get('[data-cy=calc-output]').then(($output) => {
            $output.text(testOutputContext);
          });
        cy.dataCy("btn-equal").click() 
        cy.dataCy("calc-output").invoke('text').then(txt=>{
         if(txt===testOutputContext){
              cy.dataCy("invalid").invoke('text').should('equal',errorDevideByZero);
         }
        })
         
     })
})