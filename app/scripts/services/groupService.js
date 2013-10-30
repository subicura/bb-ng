'use strict';

angular.module('bbNgApp')
  .factory('GroupService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/groups/:id/:member_action/:member_action_id/:member_action2.json', {
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
      },
      addUser: {
        method: "GET",
        params: {
          member_action: "users",
          member_action2: "add"
        }
      }
    });
  });