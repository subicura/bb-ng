'use strict';

angular.module('bbNgApp')

  .factory('LoginInfo', function(){
    var sdo = {
      isLogged: false,
      userInfo: null
    }
    return sdo;
  })

  .service('UserService', function($http, LoginInfo) {    
    this.login = function(email, password, successCallback, failCallback){
      $http.post('http://localhost:3000/users/sign_in', { email: email, password: password})
        .success(function(data, status){
          LoginInfo.isLogged = true;
          LoginInfo.userInfo = data;   
          console.log(LoginInfo);       
          successCallback(data, status);
        }).error(function(data, status) {
          failCallback(data, status);
        });
    };

    this.logout = function(){
      $http.delete('http://localhost:3000/users/sign_out', { email: LoginInfo.userInfo.email})
        .success(function(data, status){
          LoginInfo.isLogged = false;
          LoginInfo.userInfo = null;
        }).error(function(data, status){
          LoginInfo.isLogged = false;
          LoginInfo.userInfo = null;
        });
    }
  });
