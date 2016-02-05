'use strict';

angular.module('ngsocialApp')
  .controller('FacebookController', ['$scope', '$facebook',
    function ($scope, $facebook) {
    console.log('FacebookController');
    $scope.islogedin = false;

    $scope.login = function(){
      $facebook.login().then(function(){
        console.log('Logged in');
      });
    };
  }])
;
