'use strict';

describe('Controller: WelcomeCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var WelcomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WelcomeCtrl = $controller('WelcomeCtrl', {
      $scope: scope
    });
  }));

  it('facebook 로그인 함수가 있어야함', function () {
    expect(scope.loginWithFacebook).toBeDefined();
  });

});
