import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  chromeWebSecurity: false,
  projectId: 'fb9q9p',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
