define(["angular", "services"], function (angular, services) {
    "use strict";

    angular.module("app.filters", ["app.services"])
        .filter("interpolate", ["version", function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
    }]);
});
