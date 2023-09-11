const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      Api_Url: 'https://localhost:44304/api',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzOTA4NjAsImlzcyI6IlVzZXIiLCJhdWQiOiJmdWxsIn0.Tg5pbMNM140Ak0-NZggZ2e_779HK1j86tefexM10uQU'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  fixturesFolder:false,
});
