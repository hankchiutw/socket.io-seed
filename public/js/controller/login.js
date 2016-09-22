"use strict";

define([
    "angular",
    "js/app",
    "js/factory/session"
], function(angular, app){

    /**
     * Login controller
     * @class loginController
     */
    app.controller("loginController", controller);

    controller.$inject = ["$scope", "$location", "$http", "session", "$state"];

    return controller;

    ///////
    function controller($scope, $location, $http, session, $state){

        $scope.login = login;
        $scope.tryLogin = function(event){ if(event.keyCode==13) $scope.login(); };

        /////////
        /**
         * Do login API call through session service
         */
        function login(){
            $scope.status.isLoading = true;

            session.login($scope.username,$scope.password).then(function(res){
                $scope.status.isLoading = false;
                if(res.result && res.result.isSuccess){
                    $location.path("/");
                }else{
                    $scope.alert(res.result.errorData);
                }
            });

        }

    }

});
