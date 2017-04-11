'use strict';

eventsApp.controller('CacheSampleController', function CacheSampleController($scope, myCache) {
    $scope.addToCache = function (key, value) {
        myCache.put(key, value);
    };

    $scope.readToCache = function (key) {
        return myCache.get(key);
    };

    $scope.getCacheStats = function () {
        return myCache.info();
    };

});
