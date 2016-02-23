(function() {
    var module0 = angular.module("MainModule", []); //add dependencies (services) created in separate files
    module0.controller('MainController', function ($scope,  $interval,  $location) {

        var countdownTimer = function(){
            $scope.countdown -= 1;
            if($scope.countdown == 0){
                $scope.search();
            }
        };
        var stopTimer = null;
        stopTimer = $interval(countdownTimer ,1000, $scope.countdown); //total 5 intervals with 1 sec gap
        $scope.search = function(){
            if(stopTimer){
                $interval.cancel(stopTimer);
                $scope.countdown =null;
            }
            $location.path("/user/" +$scope.username); //changes path URL to /user/:username ,hence invoking routing
        };
        $scope.username = "angular"; //default username
        $scope.countdown = 10;


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