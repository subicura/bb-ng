'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineDetailCtrl', function ($scope, $state, groupService) {
    if($state.params.community_id) {
      groupService.get({ id:$state.params.community_id }, function(data) {
        $scope.community = data;
      });
    }
  });
