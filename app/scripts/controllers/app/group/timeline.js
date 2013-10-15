'use strict';

angular.module('bbNgApp')
  .controller('AppGroupTimelineCtrl', function ($scope, $http, $state, groupService, bookkeepingService, accountTitleService) {
    $scope.form = {};
    $scope.stats = bookkeepingService.calculate({ 
      group_id:$state.params.community_id,
      start_date:moment().startOf('month').format("YYYY-MM-DD"),
      end_date:moment().endOf('month').format("YYYY-MM-DD")
    });
    $scope.bookkeepings = bookkeepingService.query({ group_id:$state.params.community_id });
    $scope.account_titles = accountTitleService.query();
    $scope.group_members = groupService.members({ id:$state.params.community_id });

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
  });
