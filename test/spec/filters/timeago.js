'use strict';

describe('Filter: timeago', function () {

  // load the filter's module
  beforeEach(module('bbNgApp'));

  // initialize a new instance of the filter before each test
  var timeago;
  beforeEach(inject(function ($filter) {
    timeago = $filter('timeago');
  }));

  it('should return the input prefixed with "timeago filter:"', function () {
    var text = 'angularjs';
    expect(timeago(text)).toBe('timeago filter: ' + text);
  });

});
