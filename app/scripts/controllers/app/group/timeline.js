'use strict';

angular.module('bbNgApp')
  .controller('AppGroupTimelineCtrl', function ($scope, $state, GroupService, LoginInfo, BookkeepingService, AccountTitleService, CommentService) {
    $scope.form = {};
    $scope.canUpdate = function(id) {
      return LoginInfo.currentUser.id == id
    };
    // 수입/지출/잔액 계산
    $scope.stats = BookkeepingService.calculate({
      group_id:$state.params.group_id,
      start_date:moment().startOf('month').format("YYYY-MM-DD"),
      end_date:moment().endOf('month').format("YYYY-MM-DD")
    });

    $scope.bookkeepings = BookkeepingService.query({ group_id:$state.params.group_id });

    $scope.account_titles = AccountTitleService.query({ group_id:$state.params.group_id });

    $scope.group_members = GroupService.members({ id:$state.params.group_id });

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
      $scope.stats = BookkeepingService.calculate({ 
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date
      });
      $scope.bookkeepings = BookkeepingService.query({ 
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date
      });
    };
    $scope.formSubmit = function() {
      BookkeepingService.save({
        group_id: $state.params.group_id,
        bookkeeping: $scope.form
      }, function(data) {
        $scope.bookkeepings.unshift(data);
        $scope.form = {};
        $scope.stats = BookkeepingService.calculate({
          group_id:$state.params.group_id,
          start_date:moment().startOf('month').format("YYYY-MM-DD"),
          end_date:moment().endOf('month').format("YYYY-MM-DD")
        });
      });
    };
    $scope.removeProof = function(proof_index, bookkeeping) {
      var proof_id = bookkeeping.proofs[proof_index].id;
      if(confirm("Are you sure?")) {
        BookkeepingService.remove_proof({
          group_id: $state.params.group_id,
          id: bookkeeping.id,
          proof_id: proof_id
        }, function(data) {
          bookkeeping.proofs.splice(proof_index, 1);
        });
      }
    };
  });