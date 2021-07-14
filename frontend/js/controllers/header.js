//контроллер для шапки, подключается в index.html
main.controller('header',function($scope,$http,$location,$cookies){
  $scope.burgerClass = function() {
    if ( $('.header__menu').hasClass("deactive") ) {
      $('.header__menu').removeClass("deactive")
      $('.header__menu').addClass("active")
    }
    else {
      $('.header__menu').removeClass("active")
      $('.header__menu').addClass("deactive")
    }

    $('.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
  }

  $scope.close = function() {
    if ( $('.header__menu').hasClass("active") ) {
      $('.header__menu').removeClass("active");
      $('.header__menu').addClass("deactive");
      $('body').toggleClass('lock');
    }
  }

});
