'use strict';

describe('Controller: AppGroupSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupSettingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupSettingCtrl = $controller('AppGroupSettingCtrl', {
      $scope: scope
    });
  }));

});
