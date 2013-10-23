'use strict';

describe('Service: RestServiceInterceptor', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var RestServiceInterceptor,
    httpBackend,
    http;

  beforeEach(inject(function (_RestServiceInterceptor_, $httpBackend, $http) {
    RestServiceInterceptor = _RestServiceInterceptor_;
    httpBackend = $httpBackend;
    http = $http;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  // TODO - provider를 사용하는 방법을 모르겠음 ㅠ

  it('should nothing to do with success', function() {
    var sampleData = [{id: 1}, {id: 2}];
    httpBackend.expectGET('/').respond(sampleData);

    var ret = null;
    http({method: 'GET', url: '/'})
      .success(function(data, status, headers, config) {
        ret = data;
      });

    httpBackend.flush();

    expect(ret).toEqual(sampleData);
  });

});
