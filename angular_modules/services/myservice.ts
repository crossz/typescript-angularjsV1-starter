module MainModule{	
    export interface IMyService {
	check(address:string) : ng.IPromise<{}>;
    query() : any;
    }
	
    class MyService implements IMyService {
		
 	    static $inject = ["$http"];
	    constructor(private $http : ng.IHttpService) {			
	    }
		
        check(address:string) : ng.IPromise<{}> {
        // check(address:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<MyModel[]>> {
            // TODO: need to adjst the API address
            return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);    
        }

        query() : any {
            return [
                {
                "Title":"Query methond test",
                "Description":"Details here."
            },
                {
                "Title":"Query methond test 1",
                "Description":"Details here 1."
            },
            ]
        }
    }
	
    angular
	.module("MainApp")
    	.service("MyService", MyService);
}