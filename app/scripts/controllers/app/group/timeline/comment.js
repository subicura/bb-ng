'use strict';

angular.module('bbNgApp')
  .controller('AppGroupTimelineCommentCtrl', function ($scope, $state, CommentService) {

    function initForm() {
      $scope.newComment = {};
      $scope.commentForm.$setPristine();
      $scope.commentForm.submitted = false;
    }

    $scope.addComment = function() {
      if($scope.commentForm.$valid) {
        CommentService.save({
          group_id: $state.params.group_id,
          commentable_type: 'bookkeepings',
          commentable_id: $scope.bookkeeping.id,
          comment: $scope.newComment
        }, function(data) {
          $scope.bookkeeping.comments.push(data);
          initForm();
        });
      } else {
        $scope.commentForm.submitted = true;
      }
    };

    $scope.removeComment = function(idx) {
      var comment_id = $scope.bookkeeping.comments[idx].id;
      if(confirm("Are you sure?")) {
        CommentService.remove({
          group_id: $state.params.group_id,
          commentable_type: 'bookkeepings',
          commentable_id: $scope.bookkeeping.id,
          comment_id: comment_id
        }, function(data) {
          $scope.bookkeeping.comments.splice(idx, 1);
        });
      }
    };
  });
