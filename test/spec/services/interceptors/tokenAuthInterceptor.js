'use strict';

describe('Service: TokenAuthInterceptor', function () {

  // load the service's module
  beforeEach(module('bbNgApp'));

  // instantiate service
  var TokenAuthInterceptor;
  beforeEach(inject(function (_TokenAuthInterceptor_) {
    TokenAuthInterceptor = _TokenAuthInterceptor_;
  }));

  it('should do something', function () {
    expect(!!TokenAuthInterceptor).toBe(true);
  });

});
