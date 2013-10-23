'use strict';

describe('Controller: AppSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp', 'mockedUser'));

  var AppSettingCtrl,
    scope,
    LoginInfo;

  // set LoginInfo
  beforeEach(inject(function ($injector, defaultLoginInfo) {
    LoginInfo = $injector.get("LoginInfo");
    LoginInfo.setUserInfo(defaultLoginInfo);
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

  it('should have a user', function() {
    expect(scope.user).toBeDefined();
  });

  it('should user equals to LoginInfo.currentUser', function() {
    expect(scope.user).toEqual(LoginInfo.currentUser);
  });
});
