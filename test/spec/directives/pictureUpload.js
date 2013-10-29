'use strict';

describe('Directive: pictureUpload', function () {

  // load the directive's module
  beforeEach(module('bbNgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<picture-upload></picture-upload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pictureUpload directive');
  }));
});
