'use strict';
angular
  .module('ngsocialApp', ['ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/facebook.html',
                        controller  : 'FacebookController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
            $urlRouterProvider.otherwise('/');
  });
