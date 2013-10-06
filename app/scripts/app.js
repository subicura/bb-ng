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
      .state('join', {
        url: '/join',
        templateUrl: '/views/join.html',
        controller: 'JoinCtrl'
      })
      .state('my', {
        url: '/app',
        templateUrl: '/views/app/timeline.html',
        controller: 'AppTimelineCtrl',
        abstract: true
      })
        .state('my.timeline', {
            url: '/timeline',
            templateUrl: '/views/app/timelineDetail.html',
            controller: 'AppTimelineDetailCtrl'
          })
      .state('community', {
        url: '/app/communities',
        templateUrl: '/views/app/timeline.html',
        controller: 'AppTimelineCtrl',
        abstract: true
      })
        .state('community.item', {
          url: '/:community_id/items',
          templateUrl: '/views/app/timelineItems.html',
          controller: 'AppTimelineItemCtrl'
        })
        .state('community.report', {
          url: '/:community_id/report',
          templateUrl: '/views/app/timelineReport.html',
          controller: 'AppTimelineReportCtrl'
        })
        .state('community.calendar', {
          url: '/:community_id/calendar',
          templateUrl: '/views/app/timelineCalendar.html',
          controller: 'AppTimelineCalendarCtrl'
        })
        .state('community.member', {
          url: '/:community_id/members',
          templateUrl: '/views/app/communityMember.html',
          controller: 'AppCommunityMemberCtrl'
        })
        .state('community.setting', {
          url: '/:community_id/setting',
          templateUrl: '/views/app/communitySetting.html',
          controller: 'AppCommunitySettingCtrl'
        })
        .state('community.timeline', {
          url: '/:community_id',
          templateUrl: '/views/app/timelineDetail.html',
          controller: 'AppTimelineDetailCtrl'
        })
      .state('notification', {
        url: '/app/notifications',
        templateUrl: '/views/app/notification.html',
        controller: 'AppNotificationCtrl'
      })
      .state('setting', {
        url: '/app/setting',
        templateUrl: '/views/app/setting.html',
        controller: 'AppSettingCtrl'
      });
    
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
