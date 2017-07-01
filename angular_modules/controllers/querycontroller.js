var MainModule;
(function (MainModule) {
    var QueryController = (function () {
        function QueryController(myService) {
            // ## Non-controller(class) methods/variables can be declared in constructor; Or, can be done only during declaration stage, as following. 
            // this.myModels = this.myService.query();
            this.myService = myService;
            this.myModels = this.myService.query();
        }
        ;
        QueryController.$inject = ["MyService"];
        return QueryController;
    }());
    angular
        .module("MainApp")
        .controller("QueryController", QueryController);
})(MainModule || (MainModule = {}));
