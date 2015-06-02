var interval = 2000; // Большой интервал
var interval_mini = 10; // Наименьший интервал
var firstVisit; // Хранение данных из cookie
var entered_text = ""; // То что ввели в инпут

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
	entered_text = $('input').val();
	if (entered_text == "Теща" || entered_text == "Тёща" || entered_text == "теща" || entered_text == "тёща" || entered_text == "ТЁЩА" || entered_text == "ТЕЩА" || entered_text == "Мать жены" || entered_text == "мать жены" || entered_text == "Мама жены" || entered_text == "мама жены") {
		$('.mother-in-law').css("display","inline-block");
		$('#icon_answer').addClass('icon-mother-in-law');
	} else if (entered_text == "Тесть" || entered_text == "тесть" || entered_text == "ТЕСТЬ" || entered_text == "Отец жены" || entered_text == "отец жены" || entered_text == "Папа жены" || entered_text == "папа жены") {
		$('.father-in-law').css("display","inline-block");
		$('#icon_answer').addClass('icon-father-in-law');
	} else {
		$('.unknown').css("display","inline-block");
		$('#icon_answer').addClass('icon_unknown');
	}
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