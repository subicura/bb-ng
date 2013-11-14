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
  				end: bookkeeping.issue_date
  			})
  			console.log(bookkeeping);
  		});
  	});

    /* config object */
    $scope.uiConfig = {
      calendar:{
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
