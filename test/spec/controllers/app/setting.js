'use strict';

describe('Controller: AppSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppSettingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppSettingCtrl = $controller('AppSettingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
