'use strict';

angular.module('bbNgApp')
  .filter('timeago', function () {
    return function (input, current) {
      moment.lang("ko");
      if(current) {
        return moment(input).from(current);
      } else {
        return moment(input).fromNow();
      }
    };
  });
