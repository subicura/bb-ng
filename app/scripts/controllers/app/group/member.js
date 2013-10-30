'use strict';

angular.module('bbNgApp')
  .controller('AppGroupMemberCtrl', function ($scope, $state, GroupService, UserService) {

  	$scope.search = "";
  	$scope.searchText = "";
  	$scope.members = GroupService.members({ id: $state.params.group_id });  	  	

  	$scope.searchUsers = function(){
  		UserService.search({search: $scope.searchText}, function(data){
  			$scope.users = data;        
  		});
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

  });
