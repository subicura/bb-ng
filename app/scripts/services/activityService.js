'use strict';

angular.module('bbNgApp')
  .factory('ActivityService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/activities/:member_action.json', {
    }, {
      show: {
        method: "GET"
      }
    });
  });

