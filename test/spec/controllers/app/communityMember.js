'use strict';

describe('Controller: AppCommunityMemberCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppCommunityMemberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppCommunityMemberCtrl = $controller('AppCommunityMemberCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
