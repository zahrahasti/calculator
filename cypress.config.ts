import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"http://127.0.0.1:3000/",
    supportFile:"cypress/support/e2e.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
