'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineMenuCtrl', function ($scope, groupService) {
    groupService.query(function(data) {
      $scope.communities = data;
    });

    $scope.createGroup = function() {
      /*
      var name = prompt("새로운 그룹명을 입력해주세요.");
      if(name) {
        groupService.save({
          group:{
            name:name,
            description:"description"
          }
        }, function(data) {
          $scope.communities.push(data);
        });
      }
      */
    }
  });
