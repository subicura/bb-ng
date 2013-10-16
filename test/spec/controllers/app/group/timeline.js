'use strict';

describe('Controller: AppGroupTimelineCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupTimelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupTimelineCtrl = $controller('AppGroupTimelineCtrl', {
      $scope: scope
    });
  }));

});
