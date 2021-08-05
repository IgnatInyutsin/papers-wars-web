main.controller('mods',function($scope,$http,$location,$cookies){
	//контроллер страницы contacts
	$scope.output = "";
	let sortMods = [];

	$scope.searchClick = function () {
		//окно загрузки
		document.body.classList.remove('loaded');
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
		searchModeName = $('input[type=text]#name').val();
		searchAuthor = $('input[type=text]#author').val();
		
		//этап 3 - сбор списка модов
		$http.get('addons/config.json').then(function(allMods) {
			allMods = allMods.data.data
			for (i=allMods.length-1; i>=0; i--) {
				$http.get('addons/' + allMods[i]).then(function(data) {
					//количество совпадающих элементов в массиве
					compare = (a1, a2) => checkedCheckboxesList.reduce((a, c) => a + data.data.tags.includes(c), 0);
					//проверка и сортировка
					if (compare(checkedCheckboxesList, data.data.tags) == checkedCheckboxesList.length
					&& data.data.name.toUpperCase().includes(searchModeName.toUpperCase())
					&& data.data.author.includes(searchAuthor)) {
						$scope.output += '<div class = "mods__content__block">'
						+ '<div class="news__name"> ' + data.data.name + '</div>'
						+ '<div class="news__text">' + '<div style="text-align: center;"><u>Описание</u></div> ' + data.data.description + '</div>'
						+ '<div class="news__text">' + '<div style="text-align: center;"><u>Автор</u></div> ' + data.data.author + '</div>'
						+ '<div class="news__text">' + '<div style="text-align: center;"><u>Зависимости</u></div> ';

						for (a=0; a<data.data.addiction.length; a++) {
							$scope.output += '<a href="' + data.data.addiction[a].href + '" style="color: #87cefa;">'
							+ data.data.addiction[a].name + '. </a>'
						}

						$scope.output += '</div>'
						+ '<div class="news__text">' + '<div style="text-align: center;"><u>Теги</u></div> ';

						for (j=0; j<data.data.tags.length; j++) {
							$scope.output += data.data.tags[j] + ' ';
						}

						$scope.output += '</div>' +
						'<div class="news__text"><a href="' + data.data.doc + '" style="text-align: center; color: #87cefa"> Просмотреть </a>'
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