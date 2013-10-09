'use strict';

describe('Service: groupService', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var groupService;
  beforeEach(inject(function (_groupService_) {
    groupService = _groupService_;
  }));

  it('should do something', function () {
    expect(!!groupService).toBe(true);
  });

});
