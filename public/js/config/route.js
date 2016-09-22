'use strict';

define([
    'angular',
    'js/app',
    "js/controller/main",
    "js/controller/login"
], function(angular, app) {
    return app
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('main', {
                templateUrl: '/view/template/mainpage-wrapper.html',
                controller: 'mainController'
            })
            .state('login', {
                templateUrl: '/view/page/login.html',
                controller: 'loginController'
            });
        
    }])

    // to solve hashbang route issue in mobile chrome.
    // https://github.com/angular/angular.js/issues/7699#issuecomment-49750476
    .config(['$provide', '$locationProvider', function($provide, $locationProvider) {
        /** or by changing to html5 mode, but need sever side support */
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
            });
        }
    }]);
});
