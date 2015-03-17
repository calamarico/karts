angular.module('karts')
.directive('menu', function() {
  return {
    templateUrl: 'templates/menu.tmpl.html',
    replace: true,
    restrict: 'A'
  };
});
