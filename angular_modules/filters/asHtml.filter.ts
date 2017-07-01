module MainModule{
    "use strict";

    export function asHtml($sce : ng.ISCEService) {
        return (text : string) => {
            return $sce.trustAsHtml(text);
        }
    }
	
    asHtml.$inject = ["$sce"];

    angular
	.module("MainApp")
	.filter("asHtml", asHtml);
		

}