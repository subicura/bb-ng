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
  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.loginWithFacebook = function() {
      $state.go('app.my.timeline');
    }

    $scope.loginWithTwitter = function() {
      $state.go('app.my.timeline');
    }

    $scope.loginWithEmail = function() {
      $state.go('app.my.timeline');
    }
  });
