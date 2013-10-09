'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineMenuCtrl', function ($scope, groupService) {
    groupService.query(function(data) {
      $scope.communities = data;
    });
  });
