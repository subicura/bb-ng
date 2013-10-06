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
  .controller('WelcomeCtrl', function ($scope, $location) {
    $scope.$location = $location;

    $scope.loginWithFacebook = function() {
      $location.path("/app");
    }

    $scope.loginWithTwitter = function() {
      $location.path("/app");
    }

    $scope.loginWithEmail = function() {
      $location.path("/app");
    }
  });
