'use strict';

describe('Service: Commentservice', function () {

  // load the service's module
  beforeEach(module('BbngApp'));

  // instantiate service
  var Commentservice;
  beforeEach(inject(function (_Commentservice_) {
    Commentservice = _Commentservice_;
  }));

  it('should do something', function () {
    expect(!!Commentservice).toBe(true);
  });

});
