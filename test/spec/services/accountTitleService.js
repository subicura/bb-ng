'use strict';

describe('Service: accountTitleService', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var accountTitleService;
  beforeEach(inject(function (_accountTitleService_) {
    accountTitleService = _accountTitleService_;
  }));

  it('should do something', function () {
    expect(!!accountTitleService).toBe(true);
  });

});
