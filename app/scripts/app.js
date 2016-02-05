'use strict';
angular
  .module('ngsocialApp', ['ngResource', 'ui.router', 'ngFacebook'])
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

            });
            $urlRouterProvider.otherwise('/');
  })
  //facebook config
  .config( function( $facebookProvider ) {
  $facebookProvider.setAppId('164515627256520');
  $facebookProvider.setPermissions('email','public_profile', 'user_posts', 'publish_actions', 'user_photos');

  })
  //facebook run
  .run( function( $rootScope ) {
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = '//connect.facebook.net/en_US/sdk.js';
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
  })
;
