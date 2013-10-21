'use strict';

angular.module('bbNgApp')
  .controller('AppMenuCtrl', function ($scope, $state, GroupService) {
    $scope.newGroupForm = {}

    GroupService.query(function(data) {
      $scope.groups = data;
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
        GroupService.save($scope.newGroupForm,
          function(data) {
            $scope.groups.push(data);
            $state.go('app.group.timeline', { group_id: data.id });
            $('.new.group.modal').modal('hideDimmer');
          });
      }
    }
  });
