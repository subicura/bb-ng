/* 
 * app controller
 *
 * /app/* 의 최상위 컨트롤러
 *
 * History
 * v1.0 - 최초 작성, subicura(2013/10/06)
 */
 'use strict';

angular.module('bbNgApp')
  .controller('AppCtrl', function ($scope, $location, LoginService, LoginInfo, Facebook) {    
    $scope.currentUser = LoginInfo.currentUser;

    $scope.logout = function() {    	
    	if(this.currentUser.provider == 'facebook')
    		Facebook.logout(function(){
    			LoginService.logout(function(){
    				$location.path("/");
    			})
    		})
    	else{
				LoginService.logout(function() {
				  $location.path("/");  
				});   	
    	}    	
    }


    /**
     * Watch for Facebook to be ready.
     * There's also the event that could be used
     */
    $scope.$watch(
      function() {
        return Facebook.isReady();
      },
      function(newVal) {
        if (newVal)
          $scope.facebookReady = true;
      }
    );

  });
