# E2E Cypress Sample Project

This project demonstrates end-to-end testing using Cypress.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Open Cypress:
   ```bash
   npx cypress open
   ```

3. Run tests headless:
   ```bash
   npx cypress run
   ```

## Project Structure

- `cypress/e2e/` - End-to-end test files
- `cypress/fixtures/` - Test data fixtures
- `cypress/support/` - Custom commands and support files
- `cypress.config.js` - Cypress configuration

## Available Scripts

- `npm run cypress:open` - Open Cypress test runner
- `npm run cypress:run` - Run tests in headless mode
- `npm run cypress:run:headed` - Run tests in headed mode
- `npm run cypress:run:chrome` - Run tests in Chrome
- `npm run cypress:run:firefox` - Run tests in Firefox

## Test Examples

Sample tests are included in the `cypress/e2e/` directory to demonstrate various Cypress capabilities.