'use strict';

describe('Controller: AppMyCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppMyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppMyCtrl = $controller('AppMyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
