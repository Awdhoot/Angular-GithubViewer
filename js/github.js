/**
 * Created by synerzip on 18/11/15.
 */
(function(){




    var github = function($http){ //actual service code returning an object with some properties


        var getUser = function(username){
            return $http.get("https://api.github.com/users/"+ username).then(function(response){
                return response.data;
            });//when getUser is called it will return a promise with response.data wrapped inside it

        };
        var getRepos = function(user){
            return $http.get(user.repos_url).then(function(response){
                return response.data;
            });//returns response.data wrapped inside a promise
        };
        var getRepoDetails =function(username, reponame){
            var repo; //containd details about repo and it's contributors
            var repourl = "https://api.github.com/repos/" + username + "/" + reponame;

            return $http.get(repourl).then(function(response){
                repo = response.data;
                return $http.get(repourl +"/contributors"); //returns to following return
            }).then(function(response){
                repo.collaborators = response.data;
                return repo; //returns repo details + collaborator details wrapped up inside a promise
            });

        };

        return { //obj with 2 properties
            getUser : getUser,
            getRepos : getRepos,
            getRepoDetails : getRepoDetails
        };
    };
    var module =angular.module("githubmodule",[]);//created module for our service
    module.factory("githubmodule" , github); //registered service with angular




}());