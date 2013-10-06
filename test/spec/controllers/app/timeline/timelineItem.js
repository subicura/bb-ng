'use strict';

describe('Controller: AppTimelineItemCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppTimelineItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppTimelineItemCtrl = $controller('AppTimelineItemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
