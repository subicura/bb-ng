'use strict';

describe('Controller: AppTimelineMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppTimelineMenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppTimelineMenuCtrl = $controller('AppTimelineMenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
