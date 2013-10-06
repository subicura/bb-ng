'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineCtrl', function ($scope, $state, $location) {
    $scope.$state = $state;
    $scope.$location = $location;
  });
