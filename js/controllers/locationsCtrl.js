angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainServ){
  $scope.locations = mainSrv.travelInfo
})
