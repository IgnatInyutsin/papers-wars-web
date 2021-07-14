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
});
