/**
 * Created by synerzip on 18/11/15.
 */
(function(){
    var module = angular.module("RepoModule",['githubmodule']);
    module.controller("RepoController", function($scope, $routeParams, githubmodule){

        var onRepo =function(data){
            $scope.repo = data;
        };
        var onError = function(reason){
            $scope.error = reason;
        };
        var username = $routeParams.username;
        var reponame = $routeParams.reponame;
        githubmodule.getRepoDetails(username, reponame).then(onRepo, onError);
    });

}());