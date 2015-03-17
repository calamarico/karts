angular.module('karts')
.controller('circuitsCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.circuitId = $routeParams.circuitId;
  }
]);
