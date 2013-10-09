'use strict';

angular.module('bbNgApp')
  .factory('tokenAuthFilter', function ($q, LoginInfo) {
    return {
      request: function (config) {
        if(config.url.indexOf("http://localhost:3000") == 0) {
          config.headers["X-Auth-Email"] = LoginInfo.currentUser.email;
          config.headers["X-Auth-Token"] = LoginInfo.currentUser.auth_token;
        }
        return config || $q.when(config);
      }
    };
  });
