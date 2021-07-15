//создаем модуль main (подключается в index.html)
var main = angular.module("main", ['ngRoute','ngCookies']);

main.config(function($routeProvider){
    //проверяем строку браузера, при определенных значниях подменяем основную часть
    $routeProvider.when("/index/",{
        controller: "index",
        templateUrl:"views/controllers/index.html"
    });

    $routeProvider.when("/contacts/",{
        controller: "contacts",
        templateUrl:"views/controllers/contacts.html"
    });

    $routeProvider.when("/mods/",{
        controller: "mods",
        templateUrl:"views/controllers/mods.html"
    });

    $routeProvider.when("/best_projects/",{
        controller: "best_projects",
        templateUrl: "views/controllers/best_projects.html"
    });

    $routeProvider.when("/news/",{
        controller: "news",
        templateUrl: "views/controllers/news.html"
    });
});
