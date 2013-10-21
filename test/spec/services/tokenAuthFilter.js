'use strict';

describe('Service: TokenAuthFilter', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var TokenAuthFilter;
  beforeEach(inject(function (_TokenAuthFilter_) {
    TokenAuthFilter = _TokenAuthFilter_;
  }));

  it('should do something', function () {
    expect(!!TokenAuthFilter).toBe(true);
  });

});
