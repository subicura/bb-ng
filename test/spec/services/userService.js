'use strict';

describe('Service: UserService', function () {

  // load the service's module
  beforeEach(module('bbNgApp', 'mockedUser'));

  // instantiate service
  var UserService,
    httpBackend,
    mockedLoginService,
    CONFIG;
    
  beforeEach(inject(function (_UserService_, $httpBackend, _mockedLoginService_, _CONFIG_) {
    UserService = _UserService_;
    httpBackend = $httpBackend;
    mockedLoginService = _mockedLoginService_;
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
    var sampleData = {username: "subicura2", password:"12341234"};

    httpBackend
      .expectPUT('http://' + CONFIG.api_host + '/users.json', sampleData)
      .respond({});

    UserService.update(sampleData);

    httpBackend.flush();
  });

});
