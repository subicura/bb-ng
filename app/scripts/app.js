'use strict';

angular.module('bbNgApp', ['ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // default route
    $urlRouterProvider.otherwise("/");

    // welcome/join route
    $stateProvider
      .state('default', {
        templateUrl: '/views/layout/default.html',
        controller: 'DefaultCtrl',
        abstract: true,
        onEnter: function() {
          setBodyClass("default-layout");
        }
      })
        .state('default.welcome', {
          url: '/',
          templateUrl: '/views/welcome.html',
          controller: 'WelcomeCtrl'
        })
        .state('default.join', {
          url: '/join',
          templateUrl: '/views/join.html',
          controller: 'JoinCtrl'
        });

    // main app route
    $stateProvider
      .state('app', {
        templateUrl: '/views/layout/app.html',
        controller: 'AppCtrl',
        abstract: true,
        onEnter: function() {
          setBodyClass("app-layout");
        }
      })
        .state('app.my', {
          url: '/app',
          templateUrl: '/views/app/timeline.html',
          controller: 'AppTimelineCtrl',
          abstract: true
        })
          .state('app.my.timeline', {
              url: '/timeline',
              templateUrl: '/views/app/timelineDetail.html',
              controller: 'AppTimelineDetailCtrl'
            })
        .state('app.community', {
          url: '/app/communities',
          templateUrl: '/views/app/timeline.html',
          controller: 'AppTimelineCtrl',
          abstract: true
        })
          .state('app.community.item', {
            url: '/:community_id/items',
            templateUrl: '/views/app/timelineItems.html',
            controller: 'AppTimelineItemCtrl'
          })
          .state('app.community.report', {
            url: '/:community_id/report',
            templateUrl: '/views/app/timelineReport.html',
            controller: 'AppTimelineReportCtrl'
          })
          .state('app.community.calendar', {
            url: '/:community_id/calendar',
            templateUrl: '/views/app/timelineCalendar.html',
            controller: 'AppTimelineCalendarCtrl'
          })
          .state('app.community.member', {
            url: '/:community_id/members',
            templateUrl: '/views/app/communityMember.html',
            controller: 'AppCommunityMemberCtrl'
          })
          .state('app.community.setting', {
            url: '/:community_id/setting',
            templateUrl: '/views/app/communitySetting.html',
            controller: 'AppCommunitySettingCtrl'
          })
          .state('app.community.timeline', {
            url: '/:community_id',
            templateUrl: '/views/app/timelineDetail.html',
            controller: 'AppTimelineDetailCtrl'
          })
        .state('app.notification', {
          url: '/app/notifications',
          templateUrl: '/views/app/notification.html',
          controller: 'AppNotificationCtrl'
        })
        .state('app.setting', {
          url: '/app/setting',
          templateUrl: '/views/app/setting.html',
          controller: 'AppSettingCtrl'
        });
    
    $locationProvider.html5Mode(true).hashPrefix('!');

    // layout마다 {name}-layout class를 body에 넣어줌
    function setBodyClass(className) {
      var body = $("body");
      var classes = body.attr("class").split(" ");
      angular.forEach(classes, function(value){
        if(value.indexOf("-layout") > 0) {
          body.removeClass(value);
        }
      });
      body.addClass(className);
    }
  });
