'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineCtrl', function ($scope, $location, $stateParams) {
    $scope.$stateParams = $stateParams;
    $scope.$location = $location;
  });
