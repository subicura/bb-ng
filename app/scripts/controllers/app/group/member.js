'use strict';

angular.module('bbNgApp')
  .controller('AppGroupMemberCtrl', function ($scope, $state, GroupService, UserService, LoginInfo) {

  	$scope.search = "";
  	$scope.searchText = "";
  	$scope.members = GroupService.members({ id: $state.params.group_id }); 

    // 현재 사용자가 그룹의 owner인지 아닌지 $scope.isOwner에 저장
    GroupService.get({ id: $state.params.group_id }, function(data){
      $scope.isOwner = data.owner.id == LoginInfo.currentUser.id;      
    });

  	$scope.searchUsers = function(){
      if($scope.searchText == ""){
        window.alert('Enter the search text!');
      } else {
    		UserService.search({search: $scope.searchText}, function(data){
          $scope.users = _.filter(data, function(user){
            return !_.find($scope.members, function(member){ return member.id === user.id; });
          });
    		});
      }
  	}

    $scope.addUsers = function(){

      for (var i = $scope.users.length - 1; i >= 0; i--) {        
        if($scope.users[i].checked){
          var existUser = _.find($scope.members, function(member){
            return member.id == $scope.users[i].id;   
          })
          
          if(existUser == null){
            console.log($scope.users[i].id);
            GroupService.addUser({id: $state.params.group_id, member_action_id:$scope.users[i].id});
            $scope.members.push($scope.users[i]);
          }
        }
      };      
    }

    $scope.showAddUserForm = function() {
      $scope.searchText = "";
      $scope.users = [];
      $('.new.member.modal')
        .modal('setting', 'selector', {
          close : '.close, .actions .cancel.button'
        })
        .modal('setting', 'transition', 'fade up')
        .modal('show');
    }

    $scope.removeUser = function(member_id){
      if(window.confirm("Are you sure?")){
        GroupService.removeUser({ id: $state.params.group_id, member_action_id:member_id });
        $scope.members = _.reject($scope.members, function(member){
          return member.id == member_id;
        });
      }
    }

  });
