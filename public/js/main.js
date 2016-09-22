"use strict";

define([
    "angular",
    "js/app",
    "js/config/route",
    "js/config/rest",
    "js/factory/session"
], function(angular, app) {

    app.run(run);
    run.$inject = ["$rootScope", "session", "$http", "Restangular", "API_URL", "$state"];

    function run($rootScope, session, $http, Restangular, API_URL, $state) {
        $rootScope.logout = function(){
            session.clearLogin();
            delete $rootScope.currentUser;
            $state.go("/login");
        }

        if (session.isValid())
            $http.defaults.headers.common["Authorization"] = "Bearer " + session.token;

        $state.go('login');

        $rootScope.$on("$stateChangeSuccess", function() {
            console.log('$stateChangeSuccess: session: ', session.isValid());
            if(!session.isValid()) $state.go("login");
        });

        // this can not be done by app.config()
        Restangular.setBaseUrl(API_URL);
    }
});
