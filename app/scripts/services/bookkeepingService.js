'use strict';

angular.module('bbNgApp')
  .factory('BookkeepingService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/groups/:group_id/bookkeepings/:collection_action/:id/:member_action/:proof_id.json', {
      group_id: '@group_id',
      id: '@id',
      proof_id: '@proof_id'
    }, {
      update: {
        method: "PUT"
      },
      calculate: {
        method: "GET",
        params: {
          collection_action: "calculate"
        }
      },
      add_proof: {
        method: "POST",
        params: {
          member_action: "add_proof"
        }
      },
      remove_proof: {
        method: "DELETE",
        url: "http://localhost:3000/groups/:group_id/bookkeepings/:id/proofs/remove_proof/:proof_id"
      }
    });
  });