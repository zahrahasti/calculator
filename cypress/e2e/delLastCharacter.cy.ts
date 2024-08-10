beforeEach("load the page", () => {
    cy.loadPage() 
  });
  
  it("checks for delete last character of output", () => {
    const testText = "12345";
    const currentText = testText.slice(0, -1);
  
    // Set the text in the output element
    cy.get('[data-cy=calc-output]').then(($output) => {
      $output.text(testText);
    });
  
    // Simulate clicking the delete button
    cy.dataCy("delete").click();
  
    // Verify the output text after clicking delete
    cy.dataCy("calc-output").invoke('text').should('equal', currentText);
  });
  