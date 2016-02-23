/**
 * Created by synerzip on 18/11/15.
 */
(function(){
    var app = angular.module("myApp", ['RepoModule','MainModule','module0','ngRoute']); //add dependencies (services) created in separate files, "ngRoute" dependency is must for routing

    app.config(function ($routeProvider) {

    $routeProvider
        .when("/main", {
        templateUrl : "../src/main.html",
        controller : "MainController" //optional, if already specified as ng-controller
        })
        .when("/user/:username",{
            templateUrl : "../src/user.html",
            controller : "UserController"
        })
        .when("/repo/:username/:reponame",{
            templateUrl : "../src/repo.html",
            controller : "RepoController"
        })

        .otherwise({redirectTo : "/main"});


    }); //config function to run when this module is invoked
}());