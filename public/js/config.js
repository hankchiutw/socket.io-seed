"use strict";

require.config({
    baseUrl: "/",   // site root path
    // MUST be modified when new version released
    urlArgs: "v=1.0.20160922",
    paths: {
        "angular": "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.9/angular",
        "angularRoute": "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0/angular-route.min",
        "angularLocalStorage": "//cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.2.2/angular-local-storage.min",
        "angularUiBootstrap": "//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.1.2/ui-bootstrap-tpls.min",
        "angularUiRouter": "//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min",
        "angularFileUploadShim": "//cdnjs.cloudflare.com/ajax/libs/danialfarid-angular-file-upload/8.0.5/ng-file-upload-shim.min",
        "angularFileUpload": "//cdnjs.cloudflare.com/ajax/libs/danialfarid-angular-file-upload/8.0.5/ng-file-upload.min",
        "angularLoadingBar": "//cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.8.0/loading-bar.min",
        "angularDialog": "//cdnjs.cloudflare.com/ajax/libs/ng-dialog/0.4.0/js/ngDialog.min",
        "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        "restangular": "//cdnjs.cloudflare.com/ajax/libs/restangular/1.5.1/restangular.min"
/*
        "angular": "lib/angularjs/angular.min",
        "angularRoute": "lib/angular-route/angular-route.min",
        "angularLocalStorage": "lib/angular-local-storage/dist/angular-local-storage.min",
        "angularUiBootstrap": "lib/angular-bootstrap/ui-bootstrap-tpls.min",
        "angularUiRouter": "lib/angular-ui-router/release/angular-ui-router.min",
        "angularFileUploadShim": "lib/ng-file-upload/ng-file-upload-shim.min",
        "angularFileUpload": "lib/ng-file-upload/ng-file-upload.min",
        "angularLoadingBar": "lib/angular-loading-bar/build/loading-bar.min",
        "angularDialog": "lib/ng-dialog/js/ngDialog.min",
        "underscore": "lib/underscore/underscore-min",
        "restangular": "lib/restangular/dist/restangular.min",
*/
    },
    shim: {
        "angular": {"exports":"angular"},
        "angularLocalStorage": ["angular"],
        "angularRoute": ["angular"],
        "angularUiBootstrap": ["angular"],
        "angularUiRouter": ["angular"],
        "angularFileUpload": ["angular", "angularFileUploadShim"],
        "angularLoadingBar": ["angular"],
        "angularDialog": ["angular"],
        "underscore": {"exports":"underscore"},
        "restangular": ["angular", "underscore"]
    }
});

require([
    "angular",
    "js/main"
], function(angular){

        // DOM init
        var $html = angular.element(document.getElementsByTagName("html")[0]);
        angular.element().ready(function(){
            angular.bootstrap(document, ["mainModule"]);
            console.log("angular ready.");
        });
});
