'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineDetailCtrl', function ($scope, $state, groupService) {
    groupService.get({ id:$state.params.community_id }, function(data) {
      $scope.community = data;
    });
  });
