'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineDetailCtrl', function ($scope, $state) {

    if($state.params.community_id == 1) {
      $scope.community = {
        id:1,
        name:"test-1"
      }
    } else {
      $scope.community = {
        id:2,
        name:"test-2"
      }
    }
  });
