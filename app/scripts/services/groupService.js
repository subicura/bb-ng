'use strict';

angular.module('bbNgApp')
  .factory('GroupService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/groups/:collection_action/:id/:member_action.json', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      members: {
        method: "GET",
        params: {
          member_action: "list_members"
        },
        isArray: true
      }
    });
  });