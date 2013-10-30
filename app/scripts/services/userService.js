'use strict';

angular.module('bbNgApp')

  .service('LoginInfo', function() {
    /**
     * info - id
     *      - username
     *      - email
     *      - auth_token
     *      - avatar_url - original, medium, thumb
     * References (added by hyoseong)
     *      - http://shahjadatalukdar.wordpress.com/2013/09/27/using-html5-localstorage-with-angularjs/
     */
    this.localStorageKey = "__LOGIN_INFO";
    try {
      this.currentUser = JSON.parse(localStorage.getItem(this.localStorageKey) || "{}");
    } catch(e) {
      this.currentUser = {};
    }

    this.isUserSignedIn = function() {
      if(this.currentUser && this.currentUser.id) {
        return true;
      } else {
        return false;
      }
    };
    this.setUserInfo = function(info) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(info));
      angular.extend(this.currentUser, info);
    };
    this.reset = function() {
      this.setUserInfo({});
    };
    this.setAvatar = function(avatar_url) {
      this.setUserInfo(angular.extend(this.currentUser, { avatar_url:avatar_url }));
    }
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
      loginWithAuth:function(provider, access_token, successCallback, failCallback){
        UserService.login({ provider: provider, access_token: access_token}, function(data, headers){
          LoginInfo.setUserInfo(data);
          successCallback(data, headers);
        }, function(httpResponse){
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

  .factory('UserService', function(ResourcePlus, LoginInfo, CONFIG) {
    var resource = ResourcePlus('http://' + CONFIG["api_host"] + '/users/:action.json', {
    }, {
      update: {
        method: "PUT",
        interceptor:{
          response:function(data) {
            LoginInfo.setUserInfo(data.data);
          }
        }
      },
      login: {
        method: 'POST',
        params: {
          action: 'sign_in'
        }
      },
      logout: {
        method: 'DELETE',
        params: {
          action: 'sign_out'
        }
      },
      'search': {
        method: 'GET',
        params: {
          action: 'search'
        },
        isArray: true
      }
    });
    return resource;
  });
