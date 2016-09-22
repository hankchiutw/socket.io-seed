"use strict";

define([
    "angular",
    "js/app"
], function(angular, app) {

    /**
     * Main controller which defined variables and functionalities available for all child controllers
     * @class mainController
     */
    app.controller("mainController", controller);

    controller.$inject = ["$scope"];

    return controller;

    ////////
    function controller($scope) {

        $scope.status = {};
        $scope.alert = {};

        init();

        ////////
        function init(){
            $scope.status = {
                isLoading: false,
                isLeftOn: false,
                message: ""
            };

            /**
             * In page alert(mainly for error messages)
             */
            $scope.alert = function(msg, isFixed){
                console.log("alert: ", msg);
                $scope.status.message = msg;

                if(isFixed) return false;
                $timeout(function(){ // dismiss message
                    $scope.status.message = "";
                }, 4000);
                return false;
            };

        }

    }


});
