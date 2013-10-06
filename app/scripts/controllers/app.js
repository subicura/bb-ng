/* 
 * app controller
 *
 * /app/* 의 최상위 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, subicura(2013/10/06)
 */
 'use strict';

angular.module('bbNgApp')
  .controller('AppCtrl', function ($scope, $location) {
    $scope.$location = $location;

    $scope.logout = function() {
      $location.path("/");
    }
  });
