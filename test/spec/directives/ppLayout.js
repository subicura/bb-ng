'use strict';

describe('Directive: ppLayout', function () {

  // load the directive's module
  beforeEach(module('bbNgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pp-layout></pp-layout>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ppLayout directive');
  }));
});
