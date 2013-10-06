'use strict';

angular.module('bbNgApp')
  .controller('AppTimelineMenuCtrl', function ($scope) {
    $scope.communities = [
    {
      "id":1,
      "name":"test-1"
    },
    {
      "id":2,
      "name":"test-2"
    }
    ];
  });
