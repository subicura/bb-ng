'use strict';

angular.module('bbNgApp')
  .controller('AppSettingCtrl', function ($scope, LoginInfo, UserService) {
    $scope.form = angular.copy(LoginInfo.currentUser);
    $scope.formSubmit = function() {
      UserService.update({ user:$scope.form }, function(data) {
        LoginInfo.setUserInfo(data);
      }, function(response) {
        angular.forEach(response.data.errors, function(value, key) {
          alert(key + " " + value);
          return;
        });
      });
    }
  });
