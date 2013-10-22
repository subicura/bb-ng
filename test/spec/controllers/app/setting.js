'use strict';

describe('Controller: AppSettingCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp'));

  var AppSettingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, LoginInfo) {
    scope = $rootScope.$new();
    AppSettingCtrl = $controller('AppSettingCtrl', {
      $scope: scope
    });

    LoginInfo.setUserInfo({
      id:1,
      username:"subicura",
      email:"email",
      avatar:"/public/default.png",
      auth_token:"abcdefg"
    });
    
  }));

  it('should have a AppSettingCtrl controller', function() {
    expect(AppSettingCtrl).toBeDefined();
  });

  it('should have $scope.user', function() {
    expect(scope.user).toBeDefined();
  });

  it('$scope.user should equal to LoginInfo.currentUser', inject(['LoginInfo',
    function(LoginInfo) {
      expect(scope.user).toEqual(LoginInfo.currentUser);
    }])
  );
});
