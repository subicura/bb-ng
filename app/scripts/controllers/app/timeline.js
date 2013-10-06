'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineCtrl', function ($scope, $location, $routeParams) {
    $scope.$location = $location;
    
    $scope.community_id = $routeParams.community_id;
  });
