'use strict';

describe('Controller: AppTimelineSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppTimelineSettingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppTimelineSettingCtrl = $controller('AppTimelineSettingCtrl', {
      $scope: scope
    });
  }));

});
