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
  .directive('ppLayout', function ($location, $http, $compile, $state) {
    var cache = {};

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var currentLayout = null;

        // console.log($state.current);
        // setLayout(getLayoutName($location.path()));

        scope.$on('$stateChangeStart', updateLayout);

        function updateLayout(event, toState, toParams, fromState, fromParams) {
          if(getLayoutName(toState.controller) == "app" && currentLayout != "app") { // path - /app/xxxx
            setLayout("app");
          } else if(getLayoutName(toState.controller) == "default" && currentLayout != "default") {
            setLayout("default");
          }
        }

        function getLayoutName(controllerName) {
          // TODO - config 변수로 뺄 것
          if(controllerName.indexOf("App") == 0) {
            return "app";
          } else {
            return "default";
          }
        }

        function setLayout(layout) {
          currentLayout = layout;

          var layoutUrl = "/views/layout/" + layout + ".html";
          var controllerName = layout + "Ctrl";
          controllerName = controllerName.charAt(0).toUpperCase() + controllerName.slice(1);

          if(cache[layoutUrl]) {
            setElementHtml($compile("<div ng-controller='" + controllerName + "'>" + cache[layoutUrl] + "</div>")(scope));
          } else {
            $http.get(layoutUrl).success(function(data) {
              cache[layoutUrl] = data;
              setElementHtml($compile("<div ng-controller='" + controllerName + "'>" + cache[layoutUrl] + "</div>")(scope));
            }).error(function(data, status, headers, config) {
              element.html("something wrong T_T");
            });
          }
        }

        function setElementHtml(compiledHtml) {
          var classes = element.attr("class").split(" ");
          angular.forEach(classes, function(value){
            if(value.indexOf("-layout") > 0) {
              element.removeClass(value);
            }
          });
          element.addClass(currentLayout + "-layout");
          element.html(compiledHtml);
        }
      }
    };
  });
