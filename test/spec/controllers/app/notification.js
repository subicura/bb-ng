'use strict';

describe('Controller: AppNotificationCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppNotificationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppNotificationCtrl = $controller('AppNotificationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
