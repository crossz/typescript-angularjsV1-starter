///<reference path="../node_modules/@types/angular-route/index.d.ts"/>

module MainModule {
    "use strict";

    function routeConfig($routeProvider: ng.route.IRouteProvider){ 
        $routeProvider
            // TODO: change it. The demo api need the '/search'.
            .when("/query", {
                templateUrl: "/angular_modules/views/mypage.html",
                controller: "QueryController",
                controllerAs: "vm"
            })
            .when("/search", {
                templateUrl: "/angular_modules/views/mypage.html",
                controller: "SearchController",
                controllerAs: "vm"
            })
            .otherwise({
                redirectTo: "/query"
            });
    }

    routeConfig.$inject = ["$routeProvider"]

    angular
        .module("MainApp")
        .config(routeConfig);
}

