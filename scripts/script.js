var interval = 2000; // Большой интервал
var interval_mini = 10; // Наименьший интервал
var firstVisit; // Хранение данных из cookie
var entered_text = ""; // То что ввели в инпут

var motherInLaw = ["теща","тёща","мать жены","мама жены"];
var fatherInLaw = ["тесть","отец жены","папа жены"];
var grandmother = ["бабушка","бабка","бабуля","ба","жена деда","мать отца","мать матери"];

var brother = ["брат","сын в отношении к другим детям одних родителей"];
var brotherGodfather = ["брат крестный","сын крестного отца"];
var brotherCrusade = ["брат крестовый","брат по кресту", "названый брат","Брат крестовый","обменявшиеся нательными крестами"];
var cousin = ["братан"," брательник","двоюродный брат","кузен"];
var nephewOfHisBrother = ["братанич","племянник по брату"];
var wifeCousin = ["братаниха","жена двоюродного брата"];
var fraternization = ["братанна","дочь брата", "племянница по брату"];
var bratelnitsa = ["брательница","родственница двоюродная","двоюродная родственница","дальняя родственница","родственница дальняя"];
var brothersWife = ["братова","жена брата"];
var brothersSon = ["братыч","сын брата", "племянник по брату"];

/* матрица из массивов массивов */
var matrix = [
	motherInLaw,
	fatherInLaw,
	grandmother,
	brother,
	brotherGodfather,
	brotherCrusade,
	cousin,
	nephewOfHisBrother,
	wifeCousin,
	fraternization,
	bratelnitsa,
	brothersWife,
	brothersSon
];

/*** Блок функций запускающий стартовый экран ***/
function startFunction() {
	$('span:eq(0)').css("opacity","1");
	setTimeout(startFunction_2, interval);
}
function startFunction_2() {
	$('span:eq(0)').css("opacity","0");
	setTimeout(startFunction_3, interval);
}
function startFunction_3() {
	$('span:eq(1)').css("display","block");
	$('span:eq(0)').css("display","none");
	setTimeout(startFunction_4, interval_mini);
}
function startFunction_4() {
	$('span:eq(1)').css("opacity","1");
	setTimeout(startFunction_5, interval);
}
function startFunction_5() {
	$('span:eq(1)').css("opacity","0");
	setTimeout(startFunction_6, interval);
}
function startFunction_6() {
	$('span:eq(1)').css("display","none");
	$('#search').css("display","block");
	setTimeout(startFunction_7, interval_mini);
}
function startFunction_7() {
	$('#search').css("opacity","1");
}
/*** Блок функций - переход от стартового экрана к экрану запроса ***/
function mainFunction() {
	$('#welcome_text').css("display","none");
	$('#search').css("display","block");
	setTimeout(mainFunction_2, interval_mini);
}
function mainFunction_2() {
	$('#search').css("opacity","1");
}
/*** Блок функций - переход от экрана запроса к экрану ответа ***/
function answerFunction() {
	$('#search').css("opacity","0");
	setTimeout(answerFunction_2, interval);
}
function answerFunction_2() {
	$('#search').css("display","none");
	$('#answer').css("display","block");
	setTimeout(answerFunction_3, interval_mini);
}
function answerFunction_3() {
	$('#answer').css("opacity","1");
}
/*** Блок функций - переход от экрана ответа к экрану запроса ***/
function againFunction() {
	$('#answer').css("opacity","0");
	setTimeout(againFunction_2, interval);
}
function againFunction_2() {
	$('#answer').css("display","none");
	$('.answer').css('display','none');
	$('#search').css("display","block");
	$('#icon_answer').removeClass().addClass('icon');
	setTimeout(againFunction_3, interval_mini);
}
function againFunction_3() {
	$('#search').css("opacity","1");
}
/*** Проверка введенного текста ***/
function checkEnteredText() {
	/* берем введенные данные */
	entered_text = $('input').val().toLowerCase();
	/* цикл проверяет столько раз сколько элементов в матрице */
	for (var i = 1; i < (matrix.length+1); i++) {
		/* если (функциия) введенный текст совпадает с одним из элементов матрицы */
		if (switchEntered(matrix[i-1])) {
			console.log("ok")
			// задаем стили - i как индефикатор для составления селектора для выборки 
			$('.span-'+(i)+'').css("display","inline-block");
			$('#icon_answer').addClass('icon-'+(i)+'');
			break;
		} else if (i == (matrix.length)) {
			console.log("error")
			$('.unknown').css("display","inline-block");
			$('#icon_answer').addClass('icon_unknown');
		}
	};
	// Функция принимает на входе массив значений для сравнения и возвращает true или false
	function switchEntered(i) {
		var x = i.some( function(item){ return item == entered_text; } );
		return x;
	}
	// Выводим экран ответа
	setTimeout(answerFunction, interval_mini);
}

/*** Основные - после загрузки страницы ***/
$(function() {
	firstVisit = $.cookie('firstVisit'); // берем данные из куки
	if (firstVisit == 'true') { // если куки есть
		console.log("Опытный! - Куки не создаем!")
		setTimeout(mainFunction, 500); // запускаем экран поиска
		//setTimeout(startFunction, 500);
	} else { // а если нет
		console.log("Первый раз, как в первый класс! - Создаем куки!")
		$.cookie('firstVisit', 'true');
		setTimeout(startFunction, 500); // запускаем начальный экран
	}
	/* Обработчики уменьшают или увеличивают лого в зависимости от фокуса */
	$('input').focus(function(){
		$('.logo').css({'width':'100px','height':'100px'})
	});
	$('input').blur(function(){
		$('.logo').css({'width':'200px','height':'200px'})
	});
	/* Обработчик клика по кнопке поиска */
	$('a.check').click(function(event) {
		checkEnteredText();
	});
	/* Обработчик клавиши Enter */
	$('input').keydown(function(eventObject){
		if (eventObject.which == 13) {
			checkEnteredText();
		}
	});
	/* Обработчик кнопки назад на экране ответа */
	$('a.try-again').click(function(event) {
		$('input').val("");
		setTimeout(againFunction, interval_mini);
	});
});