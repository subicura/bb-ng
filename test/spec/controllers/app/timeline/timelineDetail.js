'use strict';

describe('Controller: AppTimelineDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppTimelineDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppTimelineDetailCtrl = $controller('AppTimelineDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
