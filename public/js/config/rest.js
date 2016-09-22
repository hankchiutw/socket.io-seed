'use strict';

define([
    'angular',
    'js/app'
], function(angular, app) {
    return app
    /** configure for resources getting from rest api  */
    .config(['RestangularProvider', function(RestangularProvider) {
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred){
            if (response.status === 401)
                location.pathname = '/login'; // Unauthrized
            else if (!data || !data.result)
                return { error: '非預期錯誤發生' };
            else if (!data.result.result && !data.result.isSuccess)
                return { error: data.result.errorData };
            return data.result.result;
        });

        // common params
        RestangularProvider.addFullRequestInterceptor(function(data, operation, what, url, headers, params){
            if (data && data.__v !== undefined)
                delete data.__v
            params = params || {};
            headers = headers || {};
            return {
                params: params,
                headers: headers
            };
        });

        RestangularProvider.setRestangularFields({
          id: "objectId"
        });

    }]);
});
