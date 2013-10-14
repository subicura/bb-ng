'use strict';

angular.module('bbNgApp')
  .controller('AppGroupTimelineCtrl', function ($scope, $http, $state, groupService) {
    $scope.editGroupForm = {};
    $scope.form = {};
    $scope.stats = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/2013-10-01/2013-10-31/calculate').then(function(result) {return result.data});
    $scope.bookkeepings = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings').then(function(result) { return result.data;});
    $scope.account_titles = $http.get('http://localhost:3000/account_titles').then(function(result) { return result.data; });
    $scope.group_members = $http.get('http://localhost:3000/groups/' + $state.params.community_id + '/members').then(function(result) { return result.data; });
    $scope.removeBookkeeping = function(index) {
      if(confirm("Are you sure?"))
      {
        $http.delete("http://localhost:3000/groups/" + $state.params.community_id + "/bookkeepings/" + $scope.bookkeepings.$$v[index].id).success(function(data){
            debugger;
            $scope.bookkeepings.$$v.splice(index, 1);
        })  
      }
    };
    $scope.termSubmit = function() {
      $scope.stats = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/'+ $scope.term.start_date +'/'+ $scope.term.end_date +'/calculate').then(function(result) {return result.data});
      $scope.bookkeepings = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/'+ $scope.term.start_date +'/'+ $scope.term.end_date ).then(function(result) { return result.data;});
    };
    $scope.formSubmit = function() {
      $http.post('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings', {bookkeeping: $scope.form}).success(function (data) {
          $scope.bookkeepings.$$v.unshift(data);
          $scope.form = {};
          $scope.stats = $http.get('http://localhost:3000/groups/'+ $state.params.community_id +'/bookkeepings/2013-10-01/2013-10-31/calculate').then(function(result) {return result.data});
      });
    };
    if($state.params.community_id) {
      groupService.get({ id:$state.params.community_id }, function(data) {
        $scope.community = data;
      });

      $scope.showEditGroup = function(group) {
        $scope.editGroupForm = angular.copy($scope.community);
        $('.edit.group.modal')
          .modal('setting', 'selector', {
            close : '.close, .actions .cancel.button'
          })
          .modal('setting', 'transition', 'fade up')
          .modal('show');
      }

      $scope.editGroup = function() {
        if($.trim($scope.community.name) == "") {
          alert("그룹명을 입력해주세요.");
        } else {
          $scope.editGroupForm.$update(function(data) {
            $scope.community = data;
            $('.edit.group.modal').modal('hideDimmer');
          });
        }
      }
    }
  })
  .filter('timeago', function() {
        return function(input, p_allowFuture) {
            var substitute = function (stringOrFunction, number, strings) {
                    var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, dateDifference) : stringOrFunction;
                    var value = (strings.numbers && strings.numbers[number]) || number;
                    return string.replace(/%d/i, value);
                },
                nowTime = (new Date()).getTime(),
                date = (new Date(input)).getTime(),
                //refreshMillis= 6e4, //A minute
                allowFuture = p_allowFuture || false,
                strings= {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years"
                },
                dateDifference = nowTime - date,
                words,
                seconds = Math.abs(dateDifference) / 1000,
                minutes = seconds / 60,
                hours = minutes / 60,
                days = hours / 24,
                years = days / 365,
                separator = strings.wordSeparator === undefined ?  " " : strings.wordSeparator,
            
                // var strings = this.settings.strings;
                prefix = strings.prefixAgo,
                suffix = strings.suffixAgo;
                
            if (allowFuture) {
                if (dateDifference < 0) {
                    prefix = strings.prefixFromNow;
                    suffix = strings.suffixFromNow;
                }
            }

            words = seconds < 45 && substitute(strings.seconds, Math.round(seconds), strings) ||
            seconds < 90 && substitute(strings.minute, 1, strings) ||
            minutes < 45 && substitute(strings.minutes, Math.round(minutes), strings) ||
            minutes < 90 && substitute(strings.hour, 1, strings) ||
            hours < 24 && substitute(strings.hours, Math.round(hours), strings) ||
            hours < 42 && substitute(strings.day, 1, strings) ||
            days < 30 && substitute(strings.days, Math.round(days), strings) ||
            days < 45 && substitute(strings.month, 1, strings) ||
            days < 365 && substitute(strings.months, Math.round(days / 30), strings) ||
            years < 1.5 && substitute(strings.year, 1, strings) ||
            substitute(strings.years, Math.round(years), strings);

            return $.trim([prefix, words, suffix].join(separator));
            // conditional based on optional argument
            // if (somethingElse) {
            //     out = out.toUpperCase();
            // }
            // return out;
        }
    });
