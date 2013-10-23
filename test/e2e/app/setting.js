'use strict';

describe('app/setting', function() {
  beforeEach(function() {
    browser().navigateTo('/');
    input("username").enter("tester1@bbapi.com");
    input("password").enter("12341234");
    element(".ui.big.red.button").click();
    sleep(0.5);
    browser().navigateTo('/app/setting');
  });

  it('should display the correct route', function() {
    expect(browser().location().path()).toBe('/app/setting');
  });

  it('should show default username', function() {
    expect(input("user.username").val()).toEqual("subicura");
  });

});