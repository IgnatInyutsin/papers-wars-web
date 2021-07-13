//контроллер для шапки, подключается в index.html
main.controller('header',function(){
	//событие клика по бургеру
    $('.header__burger').click(function(event){
        //добавляем класс active
        $('.header__burger,.header__menu').toggleClass('active');
        //блокируем листание страницы
        $('body').toggleClass('lock');
    });
});