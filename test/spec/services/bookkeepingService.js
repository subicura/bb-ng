'use strict';

describe('Service: bookkeepingService', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var bookkeepingService;
  beforeEach(inject(function (_bookkeepingService_) {
    bookkeepingService = _bookkeepingService_;
  }));

  it('should do something', function () {
    expect(!!bookkeepingService).toBe(true);
  });

});
