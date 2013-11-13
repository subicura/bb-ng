'use strict';

angular.module('bbNgApp')
  .controller('AppGroupTimelineCtrl', function ($scope, $state, GroupService, LoginInfo, BookkeepingService, AccountTitleService, CommentService) {
    $scope.form = {};
    $scope.add_form = {};
    $scope.bookkeeping = {};
    $scope.currentUser = LoginInfo.currentUser;

    $scope.canUpdate = function(writer) {
      return LoginInfo.currentUser.id == writer.id
    };
    // 수입/지출/잔액 계산
    var first_issue_date = moment().startOf('month').format("YYYY-MM-DD");
    BookkeepingService.get_first_issue_date(function(data) {
      first_issue_date = data.issue_date;
      $scope.stats = BookkeepingService.calculate({
        group_id:$state.params.group_id,
        start_date:first_issue_date,
        end_date:moment().endOf('month').format("YYYY-MM-DD")
      });
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

    $scope.showEditBookkeeping = function(bookkeeping) {
      $scope.edit_form = angular.copy(bookkeeping);
      $scope.edit_form.issue_date = new Date(bookkeeping.issue_date);
      $scope.bookkeeping = bookkeeping;
      $('.edit.bookkeeping.modal')
        .modal('setting', 'selector', {
          close : '.close, .actions .cancel.button'
        })
        .modal('setting', 'transition', 'fade up')
        .modal('show');
    };

    $scope.editBookkeeping = function() {
      var idx = $scope.bookkeepings.indexOf($scope.bookkeeping);
      $scope.bookkeeping = $scope.edit_form;
      $scope.bookkeeping.$update({group_id: $state.params.group_id, id: $scope.bookkeeping.id}, function(data) {
        BookkeepingService.get({group_id: $state.params.group_id, id: $scope.bookkeeping.id}, function(data) {
          $scope.bookkeepings[idx] = data;
        });

        $('.edit.group.modal').modal('hideDimmer');
      });
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
        bookkeeping: $scope.add_form
      }, function(data) {
        $scope.bookkeepings.unshift(data);
        $scope.add_form = {};
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

    $scope.likeBookkeeping = function(bookkeeping){
      BookkeepingService.like({ group_id: $state.params.group_id, id: bookkeeping.id }, function(data, headers){
        bookkeeping.liker_ids.push(LoginInfo.currentUser.id);
        bookkeeping.likes_count++;
      });
    }
    $scope.dislikeBookkeeping = function(bookkeeping){
      BookkeepingService.dislike({ group_id: $state.params.group_id, id: bookkeeping.id }, function(data, headers){
        bookkeeping.liker_ids = _.without(bookkeeping.liker_ids, LoginInfo.currentUser.id);
        bookkeeping.likes_count--;
      });
    }
  });