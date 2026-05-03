import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Folder where end‑to‑end tests are located
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    // Base URL for the application under test
    baseUrl: 'http://localhost:3000',
    // Removed cross-browser testing due to validation errors (browsers option removed)
    supportFile: 'cypress/support/e2e.js',
    // Screenshots on failure
    screenshotOnRunFailure: true,
    // Video recording
    video: true,
    // Default command timeout (ms)
    defaultCommandTimeout: 8000,
    // Page load timeout (ms)
    pageLoadTimeout: 60000,
  },
});