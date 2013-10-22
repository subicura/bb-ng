'use strict';

describe('Controller: AppSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppSettingCtrl,
    scope,
    LoginInfo;

  // set LoginInfo
  beforeEach(inject(function ($injector) {
    LoginInfo = $injector.get("LoginInfo");
    LoginInfo.setUserInfo({
      id:1,
      username:"subicura",
      email:"subicura@subicura.com",
      avatar:"/public/default.png",
      auth_token:"abcdefg"
    });
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

  it('should have a AppSettingCtrl controller', function() {
    expect(AppSettingCtrl).toBeDefined();
  });

  it('should be defined $scope.user', function() {
    expect(scope.user).toBeDefined();
  });

  it('should be defined $scope.userFormSubmit', function() {
    expect(scope.userFormSubmit).toBeDefined();
  });

  it('$scope.user should equal to LoginInfo.currentUser', function() {
    expect(scope.user).toEqual(LoginInfo.currentUser);
  });
});
