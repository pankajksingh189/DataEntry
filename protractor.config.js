exports.config = {
    // seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    //seleniumPort: '4444',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    suites: {
        landingPage: [
            './featureFiles/HomePage.feature'
       ]
    },
    cucumberOpts: {
        require: ['./step_definitions/*.js']
    },

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(120000);
        browser.manage().timeouts().pageLoadTimeout(180000);
        browser.manage().timeouts().setScriptTimeout(120000);
    },
    capabilities: {
        browserName: 'chrome',
        keepAlive: true,
        metadata: {
            device: 'PC',
            platform: {
                name: 'Windows',
                version: '10'
            }
        }

    }
}