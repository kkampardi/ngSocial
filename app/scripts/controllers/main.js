'use strict';

angular.module('ngsocialApp')
  .controller('IndexController', ['$scope', function ($scope) {
    console.log('Index Controller');
    console.log($scope);
  }])

  .controller('ServicesController', ['$scope', '$http',
   function ($scope, $http)  {
    console.log('ServicesController');
    $http.get('json/services.json').then(function(response){
      $scope.services = response.data;
      console.log($scope.services);
    })
  }])

  .controller('ContactController', [ '$scope', '$http', function ($scope, $http) {
    console.log('ContactController');
    $http.get('json/locations.json').then(function(response){
      $scope.locations = response.data;
      console.log($scope.locations);
    })
  }])
;
