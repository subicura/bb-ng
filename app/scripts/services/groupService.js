'use strict';

angular.module('bbNgApp')
  .factory('groupService', function ($resource) {
    return $resource("http://localhost\\:3000/groups/:id.json", {
      id:'@id'
    }, {
      update: {
        method:"PUT"
      }
    });
  });