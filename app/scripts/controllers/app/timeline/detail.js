'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineDetailCtrl', function ($scope, $state, groupService) {
    $scope.editGroupForm = {};

    if($state.params.community_id) {
      groupService.get({ id:$state.params.community_id }, function(data) {
        $scope.community = data;
      });

      $scope.showEditGroup = function(group) {
        $scope.editGroupForm = angular.copy($scope.community);
        $('.edit.group.modal')
          .modal('setting', 'selector', {
            close : '.close, .actions .cancel.button'
          })
          .modal('setting', 'transition', 'fade up')
          .modal('show');
      }

      $scope.editGroup = function() {
        if($.trim($scope.community.name) == "") {
          alert("그룹명을 입력해주세요.");
        } else {
          $scope.editGroupForm.$update(function(data) {
            $scope.community = angular.copy($scope.editGroupForm);
            $('.edit.group.modal').modal('hideDimmer');
          });
        }
      }
    }
  });
