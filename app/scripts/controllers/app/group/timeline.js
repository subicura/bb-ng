'use strict';

angular.module('bbNgApp')
  .controller('AppGroupTimelineCtrl', function ($scope, $state, groupService, bookkeepingService, accountTitleService) {
    $scope.form = {};
    $scope.stats = bookkeepingService.calculate({ 
      group_id:$state.params.group_id,
      start_date:moment().startOf('month').format("YYYY-MM-DD"),
      end_date:moment().endOf('month').format("YYYY-MM-DD")
    });
    $scope.bookkeepings = bookkeepingService.query({ group_id:$state.params.group_id });
    $scope.account_titles = accountTitleService.query();
    $scope.group_members = groupService.members({ id:$state.params.group_id });

    $scope.removeBookkeeping = function(idx) {
      if(confirm("Are you sure?")) {
        $scope.bookkeepings[idx].$delete({ group_id:$state.params.group_id }, function (data) {
          $scope.bookkeepings.splice(idx, 1);
        });
      }
    };
    $scope.termSubmit = function() {
      var start_date = moment($scope.term.start_date).format("YYYY-MM-DD");
      var end_date = moment($scope.term.end_date).format("YYYY-MM-DD");
      $scope.stats = bookkeepingService.calculate({ 
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date
      });
      $scope.bookkeepings = bookkeepingService.query({ 
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date
      });
    };
    $scope.formSubmit = function() {
      bookkeepingService.save({ 
        group_id: $state.params.group_id,
        bookkeeping: $scope.form
      }, function(data) {
        $scope.bookkeepings.unshift(data);
        $scope.form = {};
        $scope.stats = bookkeepingService.calculate({ 
          group_id:$state.params.group_id,
          start_date:moment().startOf('month').format("YYYY-MM-DD"),
          end_date:moment().endOf('month').format("YYYY-MM-DD")
        });
      });
    };
  });