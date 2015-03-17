/* App.js */
angular.module('karts', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/circuit/:circuitId', {
      templateUrl: 'templates/circuit-layout.tmpl.html',
      controller: 'circuitsCtrl',
      pageTitle: 'Karts - Circuit'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
])
.run(['$rootScope', function($rootScope) {
}]);
