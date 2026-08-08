import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Folder where end‑to‑end tests are located
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    // Removed baseUrl since tests use absolute URLs
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