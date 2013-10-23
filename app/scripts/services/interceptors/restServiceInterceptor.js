'use strict';

angular.module('bbNgApp')
  .factory('RestServiceInterceptor', function ($q, CONFIG) {
    return {
      'response': function(response) {
        return response || $q.when(response);
      },
   
      // optional method
     'responseError': function(rejection) {
        if(rejection.data.errors) {
          angular.forEach(rejection.data.errors, function(value, key) {
            alert(key + " " + value);
            return $q.reject(rejection);
          });
        }
        return $q.reject(rejection);
      }
    }
  });
