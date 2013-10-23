'use strict';

describe('Service: UserService', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var UserService,
    httpBackend,
    CONFIG;
  beforeEach(inject(function (_UserService_, $httpBackend, _CONFIG_) {
    UserService = _UserService_;
    httpBackend = $httpBackend;
    CONFIG = _CONFIG_;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a UserService service', function() {
    expect(UserService).toBeDefined();
  });

  it('should have a update method', function() {
    expect(UserService.update).toBeDefined();
  });

  it('should update user info', function() {
    httpBackend.expectPUT('http://' + CONFIG.api_host + '/users.json').respond({});
    
    UserService.update();

    httpBackend.flush();
  });

});
