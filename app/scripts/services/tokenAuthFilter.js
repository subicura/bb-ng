'use strict';

angular.module('bbNgApp')
  .factory('TokenAuthFilter', function ($q, LoginInfo, CONFIG) {
    return {
      request: function (config) {
        if(config.url.indexOf("http://" + CONFIG["api_host"]) == 0) {
          config.headers["X-Auth-Email"] = LoginInfo.currentUser.email;
          config.headers["X-Auth-Token"] = LoginInfo.currentUser.auth_token;
        }
        return config || $q.when(config);
      }
    };
  });
