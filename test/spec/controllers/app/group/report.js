'use strict';

describe('Controller: AppGroupReportCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupReportCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupReportCtrl = $controller('AppGroupReportCtrl', {
      $scope: scope
    });
  }));

});
