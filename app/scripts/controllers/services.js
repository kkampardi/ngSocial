  'use strict';

  angular.module('ngsocialApp')
    .controller('ServicesController', ['$scope', '$http',
     function ($scope, $http)  {
      console.log('ServicesController');
      $http.get('services.json').then(function(response){
        console.log(response);
      })
    });
