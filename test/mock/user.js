'use strict';

angular.module('mockedUser', [])
  .value('mockedLoginService', {
    default:{
      id:1,
      username:"subicura",
      email:"subicura@subicura.com",
      avatar:"/public/default.png",
      auth_token:"abcdefg"  
    }
  });