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
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
            // route for the aboutus page
            .state('app.about', {
                url:'about',
                views: {
                    'content@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutController'
                    }
                }
            })
            // route for the aboutus page
            .state('app.services', {
                url:'services',
                views: {
                    'content@': {
                        templateUrl : 'views/services-view.html',
                        controller  : 'ServicesController'
                    }
                }
              })
                // route for the template details page
                .state('app.contact', {
                  url:'contact',
                      views: {
                          'content@': {
                              templateUrl : 'views/contact.html',
                              controller  : 'ContactController'
                          }
                      }
                  });

            $urlRouterProvider.otherwise('/');
  });
