'use strict';

describe('Service: UserService', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var UserService;
  beforeEach(inject(function (_UserService_) {
    UserService = _UserService_;
  }));

  it('should have a UserService service', function() {
    expect(UserService).toBeDefined();
  });

  it('should have a update method', function() {
    expect(UserService.update).toBeDefined();
  });

});
