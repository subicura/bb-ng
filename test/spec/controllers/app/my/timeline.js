'use strict';

describe('Controller: AppMyTimelineCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppMyTimelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppMyTimelineCtrl = $controller('AppMyTimelineCtrl', {
      $scope: scope
    });
  }));

});
