/* 
 * welcome controller
 *
 * welcome(첫화면) 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, subicura(2013/10/06)
 */
'use strict';

angular.module('bbNgApp')
  .controller('WelcomeCtrl', function ($scope, $state, LoginService, Facebook) {       
    $scope.username = 'tester1@bbapi.com';
    $scope.password = '12341234';

    $scope.loginWithEmail = function() {
      LoginService.login(this.username, this.password, function(data, status){
        $state.go('app.my.timeline');
        toastr.success('Signed in successfully.')
      }, function(data, status){      
        alert(data['message']);
      });
    }

    $scope.loginWithFacebook = function() {

      Facebook.getLoginStatus(function(response) {
        if (response.status == 'connected') {
          loginWithAuth('facebook', response.authResponse.accessToken);
        } else {
          Facebook.login(function(response) {
            if (response.status == 'connected') {
              loginWithAuth('facebook', response.authResponse.accessToken);
            }
          });
        }
      });
    }

    $scope.loginWithTwitter = function() {
      LoginService.login(this.username, this.password, function(data, status){
        $state.go('app.my.timeline');
        toastr.success('Signed in successfully.')
      }, function(data, status){      
        alert(data['message']);
      });
    }

    // private method 
    
    function loginWithAuth(provider, accessToken){
      LoginService.loginWithAuth(provider, accessToken, function(data, status){
        $state.go('app.my.timeline');
        toastr.success('Signed in successfully.')
      }, function(data, status){
        alert(data['message']);
      });
    }    

  });
