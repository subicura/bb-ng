'use strict';

angular.module('bbNgApp')
  .filter('timeago', function () {
    return function (input) {
      return moment(input).fromNow();
    };
  });
