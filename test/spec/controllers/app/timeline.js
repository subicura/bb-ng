'use strict';

describe('Controller: AppTimelineCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppTimelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppTimelineCtrl = $controller('AppTimelineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
