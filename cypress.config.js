const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Folder where end‑to‑end tests are located
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    // Base URL for the application under test
    baseUrl: 'http://localhost:3000',
    // Support file loads before test files
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
  // Configure browsers for cross‑browser testing
  browsers: [
    { name: 'chrome', channel: 'stable' },
    { name: 'firefox', channel: 'stable' },
    { name: 'edge', channel: 'stable' },
  ],
});