'use strict';

describe('Controller: AppGroupMemberCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupMemberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupMemberCtrl = $controller('AppGroupMemberCtrl', {
      $scope: scope
    });
  }));
});
