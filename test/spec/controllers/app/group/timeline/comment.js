'use strict';

describe('Controller: AppGroupTimelineCommentCtrl', function () {

  // load the controller's module
  beforeEach(module('bbNgApp', 'mock.comment'));

  var AppGroupTimelineCommentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    scope.comment = $injector.get("mockedComment").default;
    AppGroupTimelineCommentCtrl = $controller('AppGroupTimelineCommentCtrl', {
      $scope: scope
    });
  }));

  it('should have comment value', function() {
    expect(scope.comment).toBeDefined();
  });

  it('should have addComment function', function() {
    expect(scope.addComment).toBeDefined();
  });

  it('should have removeComment function', function() {
    expect(scope.removeComment).toBeDefined();
  });

});
