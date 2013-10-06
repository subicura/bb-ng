/* 
 * purple layout directive
 *
 * ngView보다 큰 개념의 전체 레이아웃을 관리하는 directive
 * body에 "pp-layout"을 넣어 사용함
 *
 * History
 * v1.0 - 최초 작성, subicura(2013/10/06)
 */
'use strict';

angular.module('bbNgApp')
  .directive('ppLayout', function ($location, $http, $compile) {
    var cache = {};

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var currentLayout = null;

        setLayout(getLayoutName());

        scope.$on('$routeChangeStart', updateLayout);

        function updateLayout(event) {
          event.preventDefault();

          if(getLayoutName() == "app" && currentLayout != "app") { // path - /app/xxxx
            setLayout("app");
          } else if(getLayoutName() == "default" && currentLayout != "default") {
            setLayout("default");
          }
        }

        function getLayoutName() {
          var path = $location.path();

          // TODO - config 변수로 뺄 것
          if(path.indexOf("/app") == 0) {
            return "app";
          } else {
            return "default";
          }
        }

        function setLayout(layout) {
          currentLayout = layout;

          var layoutUrl = "/views/layout/" + layout + ".html";
          if(cache[layoutUrl]) {
            element.html(cache[layoutUrl]);
          } else {
            $http.get(layoutUrl).success(function(data) {
              var controllerName = layout + "Ctrl";
              controllerName = controllerName.charAt(0).toUpperCase() + controllerName.slice(1);
              cache[layoutUrl] = $compile("<div ng-controller='" + controllerName + "'>" + data + "</div>")(scope);
              element.html(cache[layoutUrl]);
            }).error(function(data, status, headers, config) {
              element.html("something wrong T_T");
            });
          }
        }
      }
    };
  });
