const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://us-central1-closing-x.cloudfunctions.net/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      hideXhr: true,
    },
  },
  experimentalWebKitSupport: true,
});
