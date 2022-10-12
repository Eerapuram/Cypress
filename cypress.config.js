const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uze2bq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    url : "http://the-internet.herokuapp.com",
    foo: 'bar',
    baz: 'quux'
  },
  
    "reporter": "mochawesome",
    "reporterOptions": {
       "reportDir": "cypress/reports",
       "reportFilename": "report",
       "overwrite": false,
       "html": true,
       "json": true,
       "charts": true
    },
    "retries": {
      "runMode": 1,
      "openMode": 2
    }
 
});
