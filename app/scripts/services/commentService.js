'use strict';

angular.module('bbNgApp')
  .factory('CommentService', function ($resource, CONFIG) {
    return $resource('http://' + CONFIG["api_host"] + '/groups/:group_id/:commentable_type/:commentable_id/comments/:comment_id.json', {
      group_id: '@group_id',
      commentable_id: '@commentable_id',
      commentable_type: '@commentable_type'
    });
  });
