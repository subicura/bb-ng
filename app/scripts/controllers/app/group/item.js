'use strict';

angular.module('bbNgApp')
  .controller('AppGroupItemCtrl', function ($scope, $state, GroupService, BookkeepingService) {
    $scope.stats = BookkeepingService.calculate({ 
      group_id:$state.params.group_id,
      start_date:moment().startOf('month').format("YYYY-MM-DD"),
      end_date:moment().endOf('month').format("YYYY-MM-DD")
    });
    $scope.bookkeeping_list = [];
    $scope.bookkeepings = BookkeepingService.query({ group_id:$state.params.group_id }, function(data){
      for (var i=0;i<data.length;i++)
      {
        $scope.bookkeeping_list[i] = {
          issue_date: data[i].issue_date,
          remark: data[i].remark,
          account_title: data[i].account_title.title,
          amount: ((data[i].operator == "-") ? data[i].amount * -1 : data[i].amount),
          issuer: "data[i].issuer.username"
        };
      };

    });
    $scope.group_members = GroupService.members({ id:$state.params.group_id });

    $scope.termSubmit = function() {
      var start_date = moment($scope.term.start_date).format("YYYY-MM-DD");
      var end_date = moment($scope.term.end_date).format("YYYY-MM-DD");
      $scope.stats = BookkeepingService.calculate({
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date
      });
      $scope.bookkeepings = BookkeepingService.query({
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date
      });
    };

    // https://github.com/angular-ui/ng-grid/wiki/Defining-columns
    $scope.gridOptions = {
      data: 'bookkeeping_list',
      columnDefs: [
        {field: 'issue_date', displayName: '거래일', width: 120, headerClass:'center' },
        {field: 'remark',     displayName: '적요', headerClass:'center' },
        {field: 'account_title',    displayName: '계정항목', width:120, headerClass:'center' },
        {field: 'amount',     displayName: '금액', width:200, cellClass:'right', headerClass:'center', cellTemplate: '<div class="ngCellText number {{ row.getProperty(col.field) > 0 ? \'blue\' : \'red\'}}"><i class="korean won icon"></i> {{row.getProperty(col.field) | number}}</div>' },
        {field: 'issuer',     displayName: '거래자', width:150, cellClass:'center', headerClass:'center' }
      ]
    };
  });
