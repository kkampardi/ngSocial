'use strict';

angular.module('ngsocialApp')
  .controller('FacebookController', ['$scope', '$facebook',
    function ($scope, $facebook) {
    console.log('FacebookController');
    $scope.islogedin = false;

    $scope.login = function(){
      $facebook.login().then(function(){
        console.log('Logged in');
        $scope.islogedin = true;
        refresh();
      });
    };

    $scope.logout = function(){
      $facebook.logout().then(function(){
        console.log('Logged out');
        $scope.islogedin = false;
        refresh();
      });
    };

      function refresh(){
        $facebook.api('/me').then(function(response){
          $scope.welcomeMsg = 'Wellcome ' + response.name;
          $scope.islogedin = true;
          $scope.userInfo = response;
          console.log($scope.userInfo);
        },
      function(err){
        $scope.welcomeMsg = 'Please Log In';
      }
      );
    }

    refresh();
  }])
;
