'use strict';

describe('Controller: AppMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppMenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppMenuCtrl = $controller('AppMenuCtrl', {
      $scope: scope
    });
  }));

});
