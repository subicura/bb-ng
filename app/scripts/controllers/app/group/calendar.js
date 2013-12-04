'use strict';

angular.module('bbNgApp')
  .controller('AppGroupCalendarCtrl', function ($scope, $state, BookkeepingService) {

  	$scope.events = [];
  	$scope.bookkeepings = BookkeepingService.query({ group_id:$state.params.group_id }, function(data){
  		_.each(data, function(bookkeeping){
  			$scope.events.push({
  				id: bookkeeping.id,
  				title: bookkeeping.operator + accounting.formatMoney(bookkeeping.amount, { symbol : "₩", precision : 0, format: "%s %v" })
  							+ " [" + bookkeeping.account_title.account_category.name + "-" + bookkeeping.account_title.title + "] "
  							+ bookkeeping.remark + (bookkeeping.content ? "-" + bookkeeping.content : "") 
  							+ ((bookkeeping.proofs.length + bookkeeping.comments.length) > 0 ? "(" + (bookkeeping.proofs.length + bookkeeping.comments.length) + ")" : ""),
  				start: bookkeeping.issue_date,
  				end: bookkeeping.issue_date,
          backgroundColor: (bookkeeping.operator === '+' ? 'green' : 'red'),
          borderColor: (bookkeeping.operator === '+' ? 'green' : 'red'),
          textColor: 'yellow'   
  			});
  		});
  	});

    /* config object */
    $scope.uiConfig = {
      calendar:{
        // TODO i18n
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesShort: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek',
          center: 'title',
          right: 'today prev,next'
        }        
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events];
  });
