'use strict';

describe('Controller: AppSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp', 'mock.logininfo'));

  var AppSettingCtrl,
    scope,
    httpBackend,
    LoginInfo,
    UserService,
    mockedLoginInfo;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    httpBackend = $injector.get("$httpBackend");
    LoginInfo = $injector.get("LoginInfo");
    UserService = $injector.get("UserService");
    mockedLoginInfo = $injector.get("mockedLoginInfo");

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
  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

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

  it('should setPristine form when user update', inject(['CONFIG',
    function(CONFIG) {
      // set valid
      scope.userForm = { 
        $valid:true,
        $setPristine:function(){}
      };

      httpBackend
        .expectPUT("http://" + CONFIG["api_host"] + "/users.json")
        .respond(mockedLoginInfo.updateUsername);

      spyOn(scope.userForm, '$setPristine');

      scope.user = mockedLoginInfo.updateUsername;
      scope.userFormSubmit();
      httpBackend.flush();

      expect(scope.userForm.$setPristine).toHaveBeenCalled();
    }
  ]));

  it('should userForm.submitted equals to false when user update', inject(['CONFIG',
    function(CONFIG) {
      // set valid
      scope.userForm = { 
        submitted:true,
        $valid:true,
        $setPristine:function(){}
      };

      httpBackend
        .expectPUT("http://" + CONFIG["api_host"] + "/users.json")
        .respond(mockedLoginInfo.updateUsername);

      scope.user = mockedLoginInfo.updateUsername;
      scope.userFormSubmit();
      httpBackend.flush();

      expect(scope.userForm.submitted).toEqual(false);
    }
  ]));

});
