'use strict';

describe('Service: AccountTitleService', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var AccountTitleService;
  beforeEach(inject(function (_AccountTitleService_) {
    AccountTitleService = _AccountTitleService_;
  }));

  it('should do something', function () {
    expect(!!AccountTitleService).toBe(true);
  });

});
