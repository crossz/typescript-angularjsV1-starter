module MainModule {
    class QueryController {
        static $inject = ["MyService"];
        constructor(private myService: IMyService) {
             
            // ## Non-controller(class) methods/variables can be declared in constructor; Or, can be done only during declaration stage, as following. 
            // this.myModels = this.myService.query();

        }

        private myModels: MyModel[] = this.myService.query();;
        
        // submit(address: string) {
        //     this.myService.check(address).then((result : ng.IHttpPromiseCallbackArg<MyModel[]>) =>{
        //         this.myModels = result.data;
        //     })
        //     .catch((reason : any) => {
        //         alert(reason.Message || reason.message);	
        //     });
        // }




    }
    
    angular
       .module("MainApp")
       .controller("QueryController", QueryController);
}