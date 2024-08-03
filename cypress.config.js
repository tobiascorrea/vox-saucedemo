// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   chromeWebSecurity: false,
//   //firefoxWebSecurity: false,
//   e2e: {
//     baseUrl: "https://www.saucedemo.com/",
//     setupNodeEvents(on, config) {
//     },
//   },
// });


const { defineConfig } = require("cypress");
const webpack = require("webpack");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          resolve: {
            alias: {
              '@faker-js/faker': require.resolve('@faker-js/faker')
            }
          }
        }
      };
      on('file:preprocessor', webpackPreprocessor(options));
    },
  },
});