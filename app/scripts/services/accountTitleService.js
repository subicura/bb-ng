'use strict';

angular.module('bbNgApp')
  .factory('accountTitleService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/account_titles/:collection_action/:id/:member_action.json', {
      group_id: '@group_id',
      id: '@id'
    }, {
      update: {
        method: "PUT"
      }
    });
  });