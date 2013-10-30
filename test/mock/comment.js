'use strict';

angular.module('mock.comment', [])
  .value('mockedComment', {
    default:{
      id:1,
      content:"reply content",
      created_at:"2013-10-30T01:35:47.795Z",
      updated_at:"2013-10-30T01:35:47.795Z",
      writer:{
        id:1,
        email:"tester1@test.com",
        avatar_url:"default.png"
      }
    }
  });