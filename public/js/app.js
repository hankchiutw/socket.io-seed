"use strict";

define([
    "angular",
    "angularLocalStorage",
    "angularRoute",
    "angularUiBootstrap",
    "angularUiRouter",
    "angularFileUpload",
    "angularLoadingBar",
    "restangular",
    "angularDialog",
], function(angular){

    /**
     * GA
     */
    // put GA snippets here
    
    /**
     * Main module declartion
     * @module mainModule
     */
    return angular.module( "mainModule", [
//        "ngRoute",
        "LocalStorageModule",
        "ui.bootstrap",
        "ui.router",
        "restangular",
        "ngFileUpload",
        "angular-loading-bar",
        "ngDialog",
    ])
    .constant("API_URL", '/api/v1/');
});

