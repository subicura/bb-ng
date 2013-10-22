'use strict';

describe('Filter: timeago', function () {

  // load the filter's module
  beforeEach(module('bbNgApp'));

  // initialize a new instance of the filter before each test
  var timeago;
  beforeEach(inject(function ($filter) {
    timeago = $filter('timeago');
  }));

  it('한시간 전 시간에 timeage filter를 적용하면 "an hour ago"를 출력해야 함', function () {
    var hourAgoTime = moment().subtract('hour', 1);
    expect(timeago(hourAgoTime)).toBe("an hour ago");
  });

  it('두번째 인자로 기준시간을 바꿀수 있다.', function () {
    var currentTime = moment();
    var hourAgoTime = currentTime.clone().subtract('hour', 1);
    var halfHourAgoTime = currentTime.clone().subtract('minutes', 30);
    expect(timeago(hourAgoTime, halfHourAgoTime)).toBe("30 minutes ago");
  });

});
