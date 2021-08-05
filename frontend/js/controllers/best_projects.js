main.controller('best_projects',function($scope,$http,$location,$cookies){
	//контроллер страницы contacts
	$scope.$parent.pageName = 'best_projects';
	$scope.output = "";
	checkedCheckboxesList = ["top"];

	$http.get('addons/config.json').then(function(allMods) {
		allMods = allMods.data.data
		for (i=allMods.length-1; i>=0; i--) {
			$http.get('addons/' + allMods[i]).then(function(data) {
				//количество совпадающих элементов в массиве
				compare = (a1, a2) => checkedCheckboxesList.reduce((a, c) => a + data.data.tags.includes(c), 0);
				//проверка и сортировка
				if (compare(checkedCheckboxesList, data.data.tags) == checkedCheckboxesList.length) {
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
					console.log($scope.output);
					div.insertAdjacentHTML('afterend', $scope.output);
					$scope.output = "";
				}
			});
		}
	});
});