'use strict';

angular.module('bbNgApp')
  .controller('AppGroupItemCtrl', function ($scope, $state, GroupService, BookkeepingService) {
    // TODO Refectoring
    
    $scope.bookkeeping_list = [];

    $scope.$on('$viewContentLoaded', function() {
      $scope.init_stats();
      $scope.init_data_grid();
    });

    $scope.init_stats = function(){
      $scope.stats = BookkeepingService.calculate({ 
        group_id: $state.params.group_id,
        start_date: moment().startOf('month').format("YYYY-MM-DD"),
        end_date: moment().endOf('month').format("YYYY-MM-DD")
      });

    };
    
    $scope.init_data_grid = function(){
      var start_date = moment($scope.term.start_date).format("YYYY-MM-DD");
      var end_date = moment($scope.term.end_date).format("YYYY-MM-DD");
            
      $scope.updateDataPeriod(start_date, end_date);
    };

    
    $scope.create_start_date = function(){
      var date = new Date();
      date.setDate(1);
      return date;
    };

    $scope.create_end_date = function(){
      return new Date();
    };
    
    $scope.term = {
      start_date: $scope.create_start_date(),
      end_date: $scope.create_end_date()
    };

    
    $scope.init_bookkeeping_list = function(){
      this.bookkeeping_list = [];
    };
    
    $scope.render_bookkeeping_list = function(){
      this.init_bookkeeping_list();

      for (var i=0;i<this.bookkeepings.length;i++)
      {
        this.bookkeeping_list[i] = {
          issue_date: this.bookkeepings[i].issue_date,
          remark: this.bookkeepings[i].remark,
          account_title: this.bookkeepings[i].account_title.title,
          amount: ((this.bookkeepings[i].operator == "-") ? this.bookkeepings[i].amount * -1 : this.bookkeepings[i].amount),
          issuer: this.bookkeepings[i].issuer.username
        };
      };
    };
    
    $scope.group_members = GroupService.members({ id:$state.params.group_id });

    $scope.termSubmit = function() {
      var start_date = moment($scope.term.start_date).format("YYYY-MM-DD");
      var end_date = moment($scope.term.end_date).format("YYYY-MM-DD");

      $scope.updateDataPeriod(start_date, end_date);
    };

    $scope.updateDataPeriod = function(start_date, end_date){
      BookkeepingService.calculate({
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date
      },function(data){
        $scope.stats.total = data.total;
        $scope.stats.income = data.income;
        $scope.stats.outlay = data.outlay;
      });

      BookkeepingService.query({
        group_id:$state.params.group_id,
        start_date:start_date,
        end_date:end_date,
        old: "true"
      }, function(data){
        $scope.bookkeepings = data;
        $scope.render_bookkeeping_list();
      });
    };

    $scope.updateDataDuration = function(between){
      BookkeepingService.calculate_between({
        group_id:$state.params.group_id,
        between: between
      },function(data){
        $scope.stats.total = data.total;
        $scope.stats.income = data.income;
        $scope.stats.outlay = data.outlay;
        $scope.term.start_date = new Date(data.start_date);
        $scope.term.end_date = new Date(data.end_date);
      });
      
      BookkeepingService.index_between({
        group_id:$state.params.group_id,
        between: between
      }, function(data){
        $scope.bookkeepings = data;
        $scope.render_bookkeeping_list();
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
