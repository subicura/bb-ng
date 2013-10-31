'use strict';

angular.module('bbNgApp')
  .factory('GroupService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/groups/:id/:member_action/:member_action_id.json', {
      id: '@id',
      member_action_id: '@member_action_id'
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
        method: "POST",
        params: {
          member_action: "users"
        }
      },
      removeUser: {
        method: "DELETE",
        params: {
          member_action: "users"
        }
      }
    });
  });