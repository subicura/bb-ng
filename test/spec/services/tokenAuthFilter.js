'use strict';

describe('Service: tokenAuthFilter', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var tokenAuthFilter;
  beforeEach(inject(function (_tokenAuthFilter_) {
    tokenAuthFilter = _tokenAuthFilter_;
  }));

  it('should do something', function () {
    expect(!!tokenAuthFilter).toBe(true);
  });

});
