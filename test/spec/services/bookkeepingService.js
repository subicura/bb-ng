'use strict';

describe('Service: BookkeepingService', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var BookkeepingService;
  beforeEach(inject(function (_BookkeepingService_) {
    BookkeepingService = _BookkeepingService_;
  }));

  it('should do something', function () {
    expect(!!BookkeepingService).toBe(true);
  });

});
