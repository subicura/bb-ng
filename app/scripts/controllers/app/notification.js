'use strict';

angular.module('bbNgApp')
  .controller('AppNotificationCtrl', function ($scope, ActivityService) {
    $scope.activity = {};
    $scope.activities = ActivityService.query({});
    $scope.activity_message = function (activity){
      if (activity.trackable_type == "Comment"){
        return "새로운 댓글을 달았습니다.";
      } else if(activity.trackable_type == "Bookkeeping") {
        return "새로운 가계부 항목을 입력했습니다.";
      }
      return "";
    };

    $scope.templates =
      [ { name: 'template1.html', url: 'comment.html'}
        , { name: 'template2.html', url: 'bookkeeping.html'} ];
    $scope.template = $scope.templates[0];
  });
