var MainModule;
(function (MainModule) {
    "use strict";
    function asHtml($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
    MainModule.asHtml = asHtml;
    asHtml.$inject = ["$sce"];
    angular
        .module("MainApp")
        .filter("asHtml", asHtml);
})(MainModule || (MainModule = {}));
