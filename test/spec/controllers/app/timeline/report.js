'use strict';

describe('Controller: AppTimelineReportCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppTimelineReportCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppTimelineReportCtrl = $controller('AppTimelineReportCtrl', {
      $scope: scope
    });
  }));

});
