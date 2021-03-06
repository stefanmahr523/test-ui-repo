// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {

  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  shardTestFiles: true,
  maxInstances: 2,
  // chromeDriver: './node_modules/webdriver-manager/selenium/chromedriver_2.20',
  multiCapabilities: [
    {
      'browserName': 'chrome',
      'version': '11' // not working here
      //,
      //'chromeOptions': {'args': [ '--headless', '--start-maximized', 'disable-infobars']}
    },
    {
      'browserName': 'firefox'
      //,
      // loggingPrefs: {
      //   driver: 'DEBUG',
      //   server: 'INFO',
      //   browser: 'ALL'
      // }    
    }
    // {
    //   browserName: 'firefox',
    //   firefoxOptions: {
    //     args: ['--headless']
    //   },
    //   'moz:firefoxOptions': {
    //     args: [ '--headless' ]
    //   }
    // }
  ],
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};