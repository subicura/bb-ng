'use strict';

describe('Controller: AppSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp', 'mock'));

  var AppSettingCtrl,
    scope,
    LoginInfo,
    UserService,
    mockedLoginInfo,
    CONFIG;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    LoginInfo = $injector.get("LoginInfo");
    UserService = $injector.get("UserService");
    mockedLoginInfo = $injector.get("mockedLoginInfo");
    CONFIG = $injector.get("CONFIG");

    LoginInfo.setUserInfo(mockedLoginInfo.default);

    scope = $rootScope.$new();
    AppSettingCtrl = $controller('AppSettingCtrl', {
      $scope: scope,
      LoginInfo: LoginInfo,
      UserService: UserService
    });
  }));

  // cleanup LoginInfo
  afterEach(inject(function ($injector) {
    LoginInfo.reset();
  }));

  it('should have user value', function() {
    expect(scope.user).toBeDefined();
  });

  it('should have userFormSubmit function', function() {
    expect(scope.userFormSubmit).toBeDefined();
  });

  it('should user equals to LoginInfo.currentUser', function() {
    expect(scope.user).toEqual(LoginInfo.currentUser);
  });

  it('should user update', function() {
    // set valid
    scope.userForm = { 
      $valid:true,
      $setPristine:function(){}
    };

    spyOn(UserService, 'update');

    scope.user = mockedLoginInfo.updateUsername;
    scope.userFormSubmit();

    expect(UserService.update).toHaveBeenCalled();
  });

  it('should not user update with invalid', function() {
    // set invalid
    scope.userForm = { 
      $valid:false
    };

    spyOn(UserService, 'update');

    scope.user = mockedLoginInfo.updateUsername;
    scope.userFormSubmit();

    expect(UserService.update).not.toHaveBeenCalled();
  });
});
