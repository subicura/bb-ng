/* 
 * welcome controller
 *
 * welcome(첫화면) 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, subicura(2013/10/06)
 */
'use strict';

angular.module('bbNgApp')
  .controller('WelcomeCtrl', function ($scope, $location, $state, UserService) {
    $scope.$location = $location;
    $scope.username = 'tester1@bbapi.com';
    $scope.password = '12341234';

    $scope.loginWithFacebook = function() {
      UserService.login(this.username, this.password, function(data, status){
        $state.go('my.timeline');
      }, function(data, status){      
        alert(data['message']);
      });
    }

    $scope.loginWithTwitter = function() {
      UserService.login(this.username, this.password, function(data, status){
        $state.go('my.timeline');
      }, function(data, status){      
        alert(data['message']);
      });
    }

    $scope.loginWithEmail = function() {
      UserService.login(this.username, this.password, function(data, status){
        $state.go('my.timeline');
      }, function(data, status){      
        alert(data['message']);
      });
    }
  });
