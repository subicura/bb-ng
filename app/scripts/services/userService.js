'use strict';

angular.module('bbNgApp')

  .service('LoginInfo', function() {
    /**
     * info - id
     *      - email
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

  .factory('UserService', function($http, LoginInfo) {    
    return {
      login:function(email, password, successCallback, failCallback) {
        $http.post('http://localhost:3000/users/sign_in', { email: email, password: password })
          .success(function(data, status){
            LoginInfo.setUserInfo(data);
            successCallback(data, status);
          }).error(function(data, status) {
            failCallback(data, status);
          });
      },
      logout:function() {
        $http.delete('http://localhost:3000/users/sign_out', { email: LoginInfo.currentUser.email })
          .success(function(data, status){
            LoginInfo.reset();
          }).error(function(data, status){
            LoginInfo.reset();
          });
      }
    }
  });
