'use strict';

angular.module('ngsocialApp')
  .controller('IndexController', ['$scope', function ($scope) {
    console.log('Index Controller');
    console.log($scope);
  }])

  .controller('ServicesController', ['$scope', '$http',
   function ($scope, $http)  {
    console.log('ServicesController');
    $http.get('/services.json').then(function(response){
      $scope.services = response.data;
      console.log($scope.services);
    })
  }])
;
