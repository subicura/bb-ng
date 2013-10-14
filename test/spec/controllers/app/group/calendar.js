'use strict';

describe('Controller: AppGroupCalendarCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppGroupCalendarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppGroupCalendarCtrl = $controller('AppGroupCalendarCtrl', {
      $scope: scope
    });
  }));

});
