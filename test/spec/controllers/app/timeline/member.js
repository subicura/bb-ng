'use strict';

describe('Controller: AppTimelineMemberCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppTimelineMemberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppTimelineMemberCtrl = $controller('AppTimelineMemberCtrl', {
      $scope: scope
    });
  }));
});
