'use strict';

angular.module('bbNgApp')
  .controller('AppGroupMemberCtrl', function ($scope, $state, GroupService, UserService) {

  	$scope.search = "";
  	$scope.searchText = "";
  	$scope.members = GroupService.members({ id: $state.params.group_id });  	
  	$scope.users = UserService.query();

  	$scope.searchUsers = function(){
  		UserService.search({search: $scope.searchText}, function(data){
  			$scope.users = data;
  		});
  	}

    $scope.joinUsers = function(){
      for (var i = $scope.users.length - 1; i >= 0; i--) {
        if($scope.users[i].checked)
          GroupService.add({id: $state.params.group_id, collection_id:$scope.users[i].id});
      };
      
    }
  });
