'use strict';

angular.module('bbNgApp')
  .controller('AppCommunityMemberCtrl', function ($scope, $routeParams) {
    $scope.community_id = $routeParams.community_id;
  });
