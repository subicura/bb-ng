'use strict';

describe('Controller: AppCommunitySettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppCommunitySettingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppCommunitySettingCtrl = $controller('AppCommunitySettingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
