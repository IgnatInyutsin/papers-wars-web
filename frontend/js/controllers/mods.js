main.controller('mods',function($scope,$http,$location,$cookies){
	//контроллер страницы contacts
	$scope.output = "";
	let sortMods = [];

	$scope.searchClick = function () {
		//обнуление
		$scope.output = "";
		$("div.mods__content__block").remove();
		//этап 1 - список из всех тегов запроса
		//все выбранные чекбоксы
		checkedCheckboxes = $('input[type=checkbox]:checked');
		//список заполняемый в массиве
		checkedCheckboxesList = [];
		//наполняем массив id
		for (i=0; i<checkedCheckboxes.length; i++) {
			checkedCheckboxesList.push($(checkedCheckboxes[i]).attr("id"));
		}

		//этап 2 - значение в переменной поиска
		searchModeName = $('input[type=text]').val();
		
		//этап 3 - сбор списка модов
		$http.get('addons/config.json').then(function(allMods) {
			allMods = allMods.data.data

			for (i=0; i<allMods.length; i++) {
				$http.get('addons/' + allMods[i]).then(function(data) {
					//количество совпадающих элементов в массиве
					compare = (a1, a2) => checkedCheckboxesList.reduce((a, c) => a + data.data.tags.includes(c), 0);
					//проверка и сортировка
					if (compare(checkedCheckboxesList, data.data.tags) == checkedCheckboxesList.length
					&& data.data.name.toLowerCase().includes(searchModeName.toLowerCase())) {
						$scope.output += '<div class = "mods__content__block">'
						+ '<div class="news__name"> ' + data.data.name + '</div>'
						+ '<div class="news__text">' + '<u>Описание</u> ' + data.data.description + '</div>'
						+ '<div class="news__text">' + '<u>Автор</u> ' + data.data.author + '</div>'
						+ '<div class="news__text">' + '<u>Зависимости</u> ';

						for (i2=0; i<data.data.addiction.length; i2++) {
							$scope.output += '<a href="' + data.data.addiction[i2].href + '">'
							+ data.data.addiction[i2].name + '. </a>'
						}
						$scope.output += '</div>'
						+ '<div class="news__text">' + '<u>Теги</u> ';

						for (j=0; j<data.data.tags.length; j++) {
							$scope.output += data.data.tags[j] + ' ';
						}

						$scope.output += '</div>' +
						'<div class="news__text"><a href="' + data.data.doc + '"> <u style="color: #0645AD;"> Просмотреть <u> </a>'
						+ '</div> </div>';
						div.insertAdjacentHTML('afterend', $scope.output);
						$scope.output = "";
					}
				});
			}
		});
	}

	$scope.$parent.pageName = 'mods';
});
//абоба