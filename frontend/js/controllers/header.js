//контроллер для шапки, подключается в index.html
main.controller('header',function($scope,$http,$location,$cookies){
  $scope.burgerClass = function() {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  }
});
