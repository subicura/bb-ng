'use strict';

angular.module('bbNgApp')
  .controller('AppCommunitySettingCtrl', function ($scope, $routeParams) {
    $scope.community_id = $routeParams.community_id;
  });
