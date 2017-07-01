var MainModule;
(function (MainModule) {
    var QueryController = (function () {
        function QueryController(myService) {
            this.myService = myService;
            this.myModels = this.myService.query();
        }
        QueryController.$inject = ["MyService"];
        return QueryController;
    }());
    angular
        .module("MainApp")
        .controller("QueryController", QueryController);
})(MainModule || (MainModule = {}));
