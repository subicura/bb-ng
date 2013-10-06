'use strict';

angular.module('bbNgApp', ['ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: '/views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .state('my', {
        url: '/app',
        templateUrl: '/views/app/timeline.html',
        controller: 'AppTimelineCtrl'
      })
        .state('my.timeline', {
            url: '/timeline',
            templateUrl: '/views/app/timelineDetail.html',
            controller: 'AppTimelineDetailCtrl'
          })
      .state('community', {
        url: '/app/communities',
        templateUrl: '/views/app/timeline.html',
        controller: 'AppTimelineCtrl'
      })
        .state('community.timeline', {
          url: '/:community_id',
          templateUrl: '/views/app/timelineDetail.html',
          controller: 'AppTimelineDetailCtrl'
        });

    // $routeProvider
    //   /** welcome page **/
    //   .when('/', {
    //     templateUrl: '/views/welcome.html',
    //     controller: 'WelcomeCtrl'
    //   })
    //   .when('/join', {
    //     templateUrl: '/views/join.html',
    //     controller: 'JoinCtrl'
    //   })
    //   /** app **/
    //   .when('/app', {
    //     templateUrl: '/views/app/timeline.html',
    //     controller: 'AppTimelineCtrl'
    //   })
    //   .when('/app/communities/:community_id/members', {
    //     templateUrl: '/views/app/communityMember.html',
    //     controller: 'AppCommunityMemberCtrl'
    //   })
    //   .when('/app/communities/:community_id/setting', {
    //     templateUrl: '/views/app/communitySetting.html',
    //     controller: 'AppCommunitySettingCtrl'
    //   })
    //   .when('/app/communities/:community_id', {
    //     templateUrl: '/views/app/timeline.html',
    //     controller: 'AppTimelineCtrl'
    //   })
    //   .when('/app/notifications', {
    //     templateUrl: '/views/app/notification.html',
    //     controller: 'AppNotificationCtrl'
    //   })
    //   .when('/app/setting', {
    //     templateUrl: '/views/app/setting.html',
    //     controller: 'AppSettingCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
