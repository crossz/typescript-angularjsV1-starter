module MainModule {
    class SearchController {
        static $inject = ["MyService"];
        constructor(private myService: IMyService) {
        }

        private myModels: MyModel[];
        
        submit(address: string) {
            this.myService.check(address).then((result : ng.IHttpPromiseCallbackArg<MyModel[]>) =>{
                this.myModels = result.data;
            })
            .catch((reason : any) => {
                alert(reason.Message || reason.message);	
            });
        }

    }
    
    angular
       .module("MainApp")
       .controller("SearchController", SearchController);
}