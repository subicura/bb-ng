'use strict';

describe('Controller: AppGroupCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupCtrl = $controller('AppGroupCtrl', {
      $scope: scope
    });
  }));

});
