var MainModule;
(function (MainModule) {
    var SearchController = (function () {
        function SearchController(myService) {
            this.myService = myService;
        }
        SearchController.prototype.submit = function (address) {
            var _this = this;
            this.myService.check(address).then(function (result) {
                _this.myModels = result.data;
            })
                .catch(function (reason) {
                alert(reason.Message || reason.message);
            });
        };
        SearchController.$inject = ["MyService"];
        return SearchController;
    }());
    angular
        .module("MainApp")
        .controller("SearchController", SearchController);
})(MainModule || (MainModule = {}));
