"use strict";

define([
    "angular",
    "js/app"
], function(angular, app){
    /**
     * session functionalities
     * @module factory/session
     */
    app.factory("session", ["localStorageService", "API_URL", "$http", function(localStorageService, API_URL, $http){
        return {
            /**
             * Call login API
             * @exports factory/session/login
             * @param {String} username
             * @param {String} password
             * @return {$promise}
             */
            login: function(username, password){
                return $http.post(API_URL+"users/login", {username: username, password: password}).then(function(res){
                    return res.data;
                });
            },
            isValid: function(){
                var currentTimestamp = Math.floor(new Date().getTime() / 1000);
                var currentUser = localStorageService.get('currentUser');
                var expiredAt = localStorageService.get('expiredAt') || new Date(0);
                return !(expiredAt < new Date() || currentUser === undefined);
            },
            clearLogin: function() {
                localStorageService.remove("token", "expiredAt", "currentUser");
            },
            clear: function(){
                localStorageService.clearAll();
            },
            set: function(session){
                if (session.token)
                    localStorageService.set("token", session.token);
                if (session.expiredAt)
                    localStorageService.set("expiredAt", new Date(session.expiredAt));
                if (session.user)
                    localStorageService.set("currentUser", session.user);
            },
            get token(){
                return localStorageService.get("token");
            },
            get currentUser(){ return localStorageService.get("currentUser"); },
            set currentUser(user){ return localStorageService.set("currentUser", user); }
        };
    }])
});
