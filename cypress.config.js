const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      charge: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: 'cypress/reports',
    },
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
    },
  },
});
