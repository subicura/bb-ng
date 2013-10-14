'use strict';

angular.module('bbNgApp')
  .controller('AppGroupTimelineCtrl', function ($scope, $http, $state, groupService) {
    $scope.editGroupForm = {};
    $scope.form = {};
    $scope.community = groupService.get({ id:$state.params.community_id });
    $scope.stats = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/2013-10-01/2013-10-31/calculate').then(function(result) {return result.data});
    $scope.bookkeepings = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings').then(function(result) { return result.data;});
    $scope.account_titles = $http.get('http://localhost:3000/account_titles').then(function(result) { return result.data; });
    $scope.group_members = $http.get('http://localhost:3000/groups/' + $state.params.community_id + '/members').then(function(result) { return result.data; });

    $scope.removeBookkeeping = function(index) {
      if(confirm("Are you sure?"))
      {
        $http.delete("http://localhost:3000/groups/" + $state.params.community_id + "/bookkeepings/" + $scope.bookkeepings.$$v[index].id).success(function(data){
            debugger;
            $scope.bookkeepings.$$v.splice(index, 1);
        })  
      }
    };
    $scope.termSubmit = function() {
      $scope.stats = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/'+ $scope.term.start_date +'/'+ $scope.term.end_date +'/calculate').then(function(result) {return result.data});
      $scope.bookkeepings = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/'+ $scope.term.start_date +'/'+ $scope.term.end_date ).then(function(result) { return result.data;});
    };
    $scope.formSubmit = function() {
      $http.post('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings', {bookkeeping: $scope.form}).success(function (data) {
          $scope.bookkeepings.$$v.unshift(data);
          $scope.form = {};
          $scope.stats = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/2013-10-01/2013-10-31/calculate').then(function(result) {return result.data});
      });
    };

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
          $scope.community = data;
          $('.edit.group.modal').modal('hideDimmer');
        });
      }
    }
  });
