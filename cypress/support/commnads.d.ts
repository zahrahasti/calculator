declare namespace Cypress {
    interface Chainable<Subject = any> {
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }

    interface Chainable<Subject = any> {
      loadPage(): Chainable<void>;
    }
    
  }
  