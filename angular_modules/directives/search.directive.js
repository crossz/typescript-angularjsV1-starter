var MainModule;
(function (MainModule) {
    var EnterKeyPressDirective = (function () {
        function EnterKeyPressDirective() {
            this.require = "?ngModel";
            this.restrict = "A";
        }
        EnterKeyPressDirective.prototype.link = function ($scope, elm, attr, ngModel) {
            var element = angular.element(elm);
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    $scope.$apply(function () {
                        $scope.$eval(attr.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
        EnterKeyPressDirective.instance = function () {
            return new EnterKeyPressDirective();
        };
        return EnterKeyPressDirective;
    }());
    angular
        .module("MainApp")
        .directive("ngEnter", EnterKeyPressDirective.instance);
})(MainModule || (MainModule = {}));
