'use strict';

define([
    'angular',
    'js/app'
], function(angular, app) {

    app.factory("User", factory);
    factory.$inject = ["Restangular"];
    return factory;

    ///////
    function factory(Restangular) {
        Restangular.addElementTransformer("users", false, _transformer);
        return Restangular.service("users");
    }

    function _transformer(item) {
        if(item.error) return item;

        // TODO: define schema
        var ret = {};
        ret.obj = item;
        return ret;
    }
});
