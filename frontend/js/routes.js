//создаем модуль main (подключается в index.html)
var main = angular.module("main", ['ngRoute','ngCookies']);

main.config(function($routeProvider){
    //проверяем строку браузера, при определенных значниях подменяем основную часть
    $routeProvider.when("/index/",{
        controller: "index",
        templateUrl:"views/controllers/index.html"
    });

    $routeProvider.when("/projects/",{
        controller: "projects",
        templateUrl:"views/controllers/projects.html"
    });

    $routeProvider.when("/contacts/",{
        controller: "contacts",
        templateUrl:"views/controllers/contacts.html"
    });


    $routeProvider.when("/about-us/",{
        controller: "about-us",
        templateUrl:"views/controllers/about-us.html"
    });

    $routeProvider.when("/search/",{
        controller: "search",
        templateUrl:"views/controllers/search.html"
    });

});