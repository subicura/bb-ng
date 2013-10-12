'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineMenuCtrl', function ($scope, $state, groupService) {
    $scope.newGroupForm = {}

    groupService.query(function(data) {
      $scope.communities = data;
    });

    $scope.showNewGroup = function() {
      $scope.newGroupForm = {}
      $('.new.group.modal')
        .modal('setting', 'selector', {
          close : '.close, .actions .cancel.button'
        })
        .modal('setting', 'transition', 'fade up')
        .modal('show');
    }

    $scope.createGroup = function() {
      if($.trim($scope.newGroupForm.name) == "") {
        alert("그룹명을 입력해주세요.");
      } else {
        groupService.save({
          group:$scope.newGroupForm
        }, function(data) {
          $scope.communities.push(data);
          $state.go('app.community.timeline', { community_id: data.id });
          $('.new.group.modal').modal('hideDimmer');
        });
      }
    }
  });
