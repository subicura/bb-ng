'use strict';

describe('Controller: AppMainCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppMainCtrl = $controller('AppMainCtrl', {
      $scope: scope
    });
  }));

});
