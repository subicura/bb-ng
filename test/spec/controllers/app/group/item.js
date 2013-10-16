'use strict';

describe('Controller: AppGroupItemCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupItemCtrl = $controller('AppGroupItemCtrl', {
      $scope: scope
    });
  }));

});
