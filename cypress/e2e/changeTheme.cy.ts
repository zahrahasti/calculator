

beforeEach("load the page",()=>{
    cy.loadPage()
})

const testThemeChange = (value:string) => {
    cy.get('.input-theme')
      .invoke('val', value)
      .trigger('change');
    
    cy.get('body').should('have.class', `style-${value}`);
  };
it("change theme",()=>{
    cy.get(".input-theme").then(($input)=>{
         
       
        const min = $input.attr('min') as string;
        const max = $input.attr('max') as string;
        expect(min).to.equal('1');
        expect(max).to.equal('3');
        testThemeChange(min) 
        testThemeChange("2") 
        testThemeChange(max) 
          
    })
})