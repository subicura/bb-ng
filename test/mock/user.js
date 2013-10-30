'use strict';

angular.module('mock.logininfo', [])
  .value('mockedLoginInfo', {
    default:{
      id:1,
      username:"subicura",
      email:"subicura@subicura.com",
      avatar:"/public/default.png",
      auth_token:"abcdefg"  
    },
    updateUsername:{
      id:1,
      username:"subicura2",
      email:"subicura@subicura.com",
      avatar:"/public/default.png",
      auth_token:"abcdefg"  
    }
  });