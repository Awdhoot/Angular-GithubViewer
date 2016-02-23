(function() {
    var module0 = angular.module("module0", ['githubmodule']); //add dependencies (services) created in separate files



    module0.controller('UserController', function ($scope, githubmodule, $routeParams) {

        var stopTimer = null;
        $scope.username = $routeParams.username;
        $scope.myOrder="-stargazers_count";
        $scope.countdown = 5;

        var onUserComplete = function (data) {
            $scope.user = data;
            githubmodule.getRepos($scope.user).then(onRepoComplete ,onError);
        };
        var onRepoComplete = function(data){
            $scope.repos = data;

        };
        var onError = function (reason) {
            $scope.error = "Could not load ";
        };

        githubmodule.getUser($scope.username).then(onUserComplete, onError);






    });


    /*
     var work = function(){

     console.log("Working!!");
     }

     var dowork = function(f){

     try {

     console.log('started');
     f(); //invoke function here
     console.log('finished');
     } catch (e) {
     console.log(e);
     }

     }

     dowork(work) //diff between work and work() is that work() invokes function and passes returned value in our case 'undefined' to dowork function
     */
//opening of immediately invoked function expression IIFE
    /*
     (function() { //defined a function
     //below is revealing module pattern
     var createWorker = function() {

     var task1 = function() {
     console.log('task1');
     };
     var task2 = function() {
     console.log('task2');
     };

     return { //returns object
     job1: task1,
     job2: task2

     };
     };
     var worker = createWorker();

     worker.job1();
     worker.job2();
     }() //calls itself
     ); //close IIFE or iffy
     */
//Use iffy to avoid global variables and make code modular i.e inside a function

}()); //iffy