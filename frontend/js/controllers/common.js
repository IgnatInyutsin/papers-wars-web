/**
    Контроллер, выполняющийся при формировании каждой страницы
*/
main.controller('common',function($scope,$http,$location,$cookies){

    // Кнопка перемотки вверх
    $scope.showUpButton = false;
  
    // Функция перемотки вверх
    $scope.pageTop = function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;            
    }
    //если переходят по пустому хэшу то редирект на главную страницу
    if(document.location.hash=="")document.location.hash='!/index/';

});