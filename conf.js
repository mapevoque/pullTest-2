exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  waitForAngularEnabled: false,
  capabilities: {
    'browserName' : 'chrome'
  },
  onPrepare: () =>{
    browser.ignoreSynchronization = true;
  },
  suites: {
    Market: 'testMarket.js',
    Music: 'testMusic.js'      
  },
  specs: ['testMarket.js'],

jasmineNodeOpts: {
  showColors : true,
  defaultTimeoutInterval: 30000
}
};