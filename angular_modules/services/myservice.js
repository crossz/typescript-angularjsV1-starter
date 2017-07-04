var MainModule;
(function (MainModule) {
    var MyService = (function () {
        function MyService($http) {
            this.$http = $http;
        }
        MyService.prototype.check = function (address) {
            // check(address:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<MyModel[]>> {
            // TODO: need to adjst the API address
            return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
        };
        // this query() function is a fake data for testing purpose; This should be replaced by mocked API from apiary.io or real.
        MyService.prototype.query = function () {
            return [
                {
                    "Title": "Query methond test",
                    "Description": "Details here."
                },
                {
                    "Title": "Query methond test 1",
                    "Description": "Details here 123455."
                },
            ];
        };
        MyService.$inject = ["$http"];
        return MyService;
    }());
    angular
        .module("MainApp")
        .service("MyService", MyService);
})(MainModule || (MainModule = {}));
