require.config({
    paths: {
        angular: "bower_components/angular/angular.min",
        angularRoute: "bower_components/angular-route/angular-route.min",
        text: "bower_components/requirejs-text/text"
    },
    shim: {
        "angular" : {"exports" : "angular"},
        "angularRoute": ["angular"]
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    "angular",
    "app",
    "routes"
], function (angular, app, routes) {
    "use strict";

    angular
        .element(document.getElementsByTagName("html")[0])
        .ready(function () {
            angular.resumeBootstrap([app.name]);
        });
});
