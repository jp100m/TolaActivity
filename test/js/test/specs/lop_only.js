var assert = require('chai').assert;
var LoginPage = require('../pages/login.page.js');
var IndPage = require('../pages/indicators.page.js');
var TargetsTab = require('../pages/targets.page.js');
var util = require('../lib/testutil.js');

describe('"Life of Program (LoP) only" target frequency', function() {
  // Disable timeouts
  this.timeout(0);
  browser.windowHandleMaximize();

  it('should require unauthenticated users to login', function() {
    let parms = util.readConfig();
    LoginPage.open(parms.baseurl);
    LoginPage.setUserName(parms.username);
    LoginPage.setPassword(parms.password);
    LoginPage.clickLoginButton();
    IndPage.open();
    assert.equal('Program Indicators', IndPage.pageName(),
      'Unexpected page name mismatch');
  });

  it('should permit only numeric values for LoP target', function() {
    IndPage.createBasicIndicator();

    TargetsTab.setIndicatorName('LoP only target testing');
    TargetsTab.setUnitOfMeasure('Furlongs per fortnight');
    TargetsTab.setLoPTarget(192);
    TargetsTab.setBaseline(193);
    TargetsTab.setTargetFrequency('Life of Program (LoP) only');
    // This should succeed
    TargetsTab.saveIndicatorChanges();
  });

  it('should reject non-numeric values for LoP target', function() {
    TargetsTab.setLoPTarget('"666"');
    // This should fail
    TargetsTab.saveIndicatorChanges();
    let errorHint = TargetsTab.getLoPErrorHint();
    assert(errorHint.includes('Please enter a number larger than zero'),
      'Did not receive expected failure message');
    // Make it numeric; this should succeed
    TargetsTab.setLoPTarget(207);
    TargetsTab.saveIndicatorChanges();
    assert.equal(207,
      TargetsTab.getLoPTarget(),
      'Did not receive expected value from getLoPTarget()');
  });

  // FIXME: Are these 2 test cases still important?
  it('should permit non-numeric values only in legacy data for LoP target');
  it('should require numeric value for LoP target if non-numeric legacy data is modified');
});
