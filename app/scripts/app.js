'use strict';

angular.module('bbNgApp', ['ngResource'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      /** welcome page **/
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      /** app **/
      .when('/app', {
        templateUrl: 'views/app/timeline.html',
        controller: 'AppTimelineCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
