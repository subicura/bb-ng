'use strict';

angular.module('bbNgApp')

  .service('LoginInfo', function() {
    /**
     * info - id
     *      - email
     *      - auth_token
     */
    this.localStorageKey = "__LOGIN_INFO";
    this.currentUser = JSON.parse(localStorage.getItem(this.localStorageKey) || "{}");

    this.isUserSignedIn = function() {
      if(this.currentUser && this.currentUser.id) {
        return true;
      } else {
        return false;
      }
    };
    this.setUserInfo = function(info) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(info));
      this.currentUser = info;
    };
    this.reset = function() {
      this.setUserInfo({});
    };
  })

  .factory('LoginService', function($http, $resource, UserService, LoginInfo) {
    return {
      login:function(email, password, successCallback, failCallback) {
        UserService.login({ email: email, password: password }, function(data, headers) {
          LoginInfo.setUserInfo(data);
          successCallback(data, headers);
        }, function(httpResponse) {
          failCallback(httpResponse);
        });
      },
      logout:function(successCallback, failCallback) {
        UserService.logout(function(data, headers) {
          LoginInfo.reset();
          successCallback(data);
        }, function(httpResponse) {
          failCallback(httpResponse);
        });
      }
    }
  })

  .factory('UserService', function($resource, LoginInfo) {
    return $resource('http://localhost\\:3000/users/:action.json', {
    }, {
      'login': {
        method: 'POST',
        params: {
          action: 'sign_in'
        }
      },
      'logout': {
        method: 'DELETE',
        params: {
          action: 'sign_out'
        }
      }
    })
  });
