'use strict';

describe('Controller: AppSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp', 'mockedUser'));

  var AppSettingCtrl,
    scope,
    LoginInfo;

  // set LoginInfo
  beforeEach(inject(function (_LoginInfo_, mockedLoginService) {
    LoginInfo = _LoginInfo_;
    LoginInfo.setUserInfo(mockedLoginService.default);
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppSettingCtrl = $controller('AppSettingCtrl', {
      $scope: scope
    });
  }));

  // cleanup LoginInfo
  afterEach(function () {
    LoginInfo.reset();
  });

  it('should user equals to LoginInfo.currentUser', function() {
    expect(scope.user).toEqual(LoginInfo.currentUser);
  });
});
