'use strict';

angular.module('bbNgApp')
  .controller('AppMyTimelineCtrl', function ($scope, UserService, LoginInfo, BookkeepingService) {
    $scope.today = new Date();
    $scope.locale = moment.lang('ko');
    var first_issue_date;
    BookkeepingService.get_first_issue_date(function(data) {
      first_issue_date = data.issue_date;
    });
    UserService.membered_groups({
      id: LoginInfo.currentUser.id
    }).$promise.then(function(data) {
        $scope.membered_groups = data
      }).then(function() {

        for(var i=0; i<$scope.membered_groups.length; i++) {
          var bookkeeping_stats = BookkeepingService.calculate({
            group_id:$scope.membered_groups[i].id,
            start_date:first_issue_date,
            end_date:moment().endOf('month').format("YYYY-MM-DD")
          });
          angular.extend($scope.membered_groups[i], { stats: bookkeeping_stats })
        }
      });
  });