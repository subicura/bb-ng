'use strict';

describe('Controller: AppGroupMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupMenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupMenuCtrl = $controller('AppGroupMenuCtrl', {
      $scope: scope
    });
  }));

});
