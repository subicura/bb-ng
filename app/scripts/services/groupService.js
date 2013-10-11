'use strict';

angular.module('bbNgApp')
  .factory('groupService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/groups/:id.json', {
      id:'@id'
    }, {
      update: {
        method:"PUT"
      }
    });
  });