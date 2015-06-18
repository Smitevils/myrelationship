var interval = 2000; // Большой интервал
var interval_mini = 10; // Наименьший интервал
var firstVisit; // Хранение данных из cookie
var entered_text = ""; // То что ввели в инпут
var switch_settings = false; // Переключатель для кнопки настроек

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

var genus = ["род","один предок","поколение","ряд поколений"]
var parents = ["родители","отец","мать"]
var parentFather = ["родитель"]
var parentMother = ["родительница"]
var home = ["родной","кровный","полнородный","одни родители"]
var relatives = ["родственники","родня"]
var patriarch = ["родоначальник","первый представитель рода"]
var genealogy = ["родословие","генеалогия"]
var ancestry = ["родословная"]
var relative = ["родственник"]
var relationship = ["родство","отношение между людьми"]

var widow = ["вдова"]
var widower = ["вдовец"]
var sisterGrandfather = ["великая тетка","сестра деда","сестра дедушки","сестра бабки","сестра бабушки","двоюродная бабка","двоюродная бабушка"]
var greatUncle = ["великий дядя","брат деда","брат дудушки","брат бабушки","брат бабки", "бабушкин брат", "бабкин брат","дедушкин брат"]
var branch = ["ветвь","линия родства"]
var grandson = ["внук","сын сына","сын дочери","сыновья племянника","сыновья племянницы"]
var greatGreatNiece = ["внучатая двоюродная племянница","внучка двоюродного брата","внучка двоюродной сестры"]
var greatNiece = ["внучатая племянница","внучка брата","внучка сестры","троюродная племянница"]
var grand_ = ["внучатый","троюродный"]
var secondCousin = ["троюродный брат","троюродная сестра"]
var greatGreatNephew = ["внучатый двоюродный племянник","внук двоюродного брата","внук двоюродной сестры"]
var grandsonBrother = ["внучатый племянник","внук брата","внук сестры"]
var greatNephewTwiceRemoved = ["внучатый троюродный племянник","внук троюродного брата","внук троюродной сестры","троюродный племянник"]
var granddaughter = ["внучка","внука","дочь сына","дочь дочери","дочь племянника","дочь племянницы"]

var greatAunt = ["двоюродная баба","двоюродная бабушка","сестра бабушки","сестра бабы","сестра дедушки","сестра деда"]
var greatGreatGrandmother = ["двоюродная прабабушка","сестра прабабушки","сестра прадеда"]
var greatGreatGreatGrandmother = ["двоюродная прапрабабушка","сестра прапрабабушки","сестра прапрадеда"]
var daughter_CousinOrSister = ["двоюродная племянница","дочь двоюродного брата","дочь двоюродной сестры"]
var cousinGerman = ["двоюродная сестра","дочь дяди","дочь тетки","дочь тети"]
var DaughterOfUncle = ["двоюродная тетка","двоюродная тетя","двоюродная сестра отца","двоюродная сестра папы","двоюродная сестра матери","двоюродная сестра мамы"]
var onceRemoved = ["двоюродный","двоюродная"]

var cousin2 = ["двоюродный брат","сын дяди","сын тети","сын тетки","сын дядьки"]
var granduncle = ["двоюродный дед","брат деда","брат бабушки"]
var dubleUncle = ["двоюродный дядя","двоюродный брат отца","двоюродный брат матери"]
var greatNephew = ["двоюродный племянник","сын двоюродного брата","сын двоюродной сестры"]
var greatGreatGrandfather = ["двоюродный прадед","брат прадеда","брат прабабушки"]
var greatGreatGreatGrandfather = ["двоюродный прапрадед","брат прапрадеда","брат прапрабабушки"]
var brotherInLaw = ["деверь","брат мужа"]

var grandfather = ["дед","дедушка","отец отца","папа папы","отец папы","папа отца","отец матери","отец мамы","папа матери","папа мама"]
var ChrestGrandFather = ["дед крестный","отец крестного отца","папа крестного отца"]
var Dedina = ["дедина","дедка","тетка по дяде","тетушка по дяде","тетя по дяде"]
var Dedich = ["дедич","наследник по деду"]
var daughter = ["дочь","лицо женского пола по отношению к своим родителям"]
var daughterNames = ["дочь названая","названая дочь", "приемыш", "воспитанница"]
var Dscherich = ["дщерич","племянник по тетке"]

var Dschersha = ["племянница по тетке","дщерша"]
var Dadka = ["дядька","человек, ухаживающий за ребенком"]
var Uncle = ["брат отца","брат матери","муж тетки","брат папы","брат мамы","брат папы"]

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
	brothersSon,
	genus,
	parents,
	parentFather,
	parentMother,
	home,
	relatives,
	patriarch,
	genealogy,
	ancestry,
	relative,
	relationship,
	//
	widow,
	widower,
	sisterGrandfather,
	greatUncle,
	branch,
	grandson,
	greatGreatNiece,
	greatNiece,
	grand_,
	secondCousin,
	greatGreatNephew,
	grandsonBrother,
	greatNephewTwiceRemoved,
	granddaughter,
	//
	greatAunt,
	greatGreatGrandmother,
	greatGreatGreatGrandmother,
	daughter_CousinOrSister,
	cousinGerman,
	DaughterOfUncle,
	onceRemoved,
	cousin2,
	granduncle,
	dubleUncle,
	greatNephew,
	greatGreatGrandfather,
	greatGreatGreatGrandfather,
	brotherInLaw,
	grandfather,
	ChrestGrandFather,
	Dedina,
	Dedich,
	daughter,
	daughterNames,
	Dscherich,
	Dschersha,
	Dadka,
	Uncle
	//
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
	$('.gear').css("display","block"); // Проявляем кнопку настроек
	setTimeout(startFunction_7, interval_mini);
}
function startFunction_7() {
	$('#search').css("opacity","1");
	$('.gear').css("opacity","0.5"); // Проявляем кнопку настроек
}
/*** Блок функций - переход от стартового экрана к экрану запроса ***/
function mainFunction() {
	$('#welcome_text').css("display","none");
	$('#search').css("display","block");
	$('.gear').css("display","block"); // Проявляем кнопку настроек
	setTimeout(mainFunction_2, interval_mini);
}
function mainFunction_2() {
	$('#search').css("opacity","1");
	$('.gear').css("opacity","0.5"); // Проявляем кнопку настроек
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

// Функция переключателя
function switchSettings() { 
	switch_settings = !switch_settings;
}
/*** Блок функций - переход от экрана запроса или ответа к экрану настроек - Вкл. ***/
function settingsFunctionOn() {
	$('#search').css("opacity","0");
	$('#answer').css("opacity","0");
	setTimeout(settingsFunctionOn_2, interval);
}
function settingsFunctionOn_2() {
	$('#search').css("display","none");
	$('#answer').css("display","none");
	$('#settings').css("display","block");
	setTimeout(settingsFunctionOn_3, interval_mini);
}
function settingsFunctionOn_3() {
	$('#settings').css("opacity","1");
}
/*** Блок функций - переход от экрана настроек к экрану запроса - Выкл. ***/
function settingsFunctionOff() {
	$('#settings').css("opacity","0");
	setTimeout(settingsFunctionOff_2, interval);
}
function settingsFunctionOff_2() {
	$('#search').css("display","block");
	$('#settings').css("display","none");
	$('#icon_answer').removeClass().addClass('icon');
	$('.answer').css('display','none');
	setTimeout(settingsFunctionOff_3, interval_mini);
}
function settingsFunctionOff_3() {
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

/* Очищаем поле ответа */
function clearAnswer() {
	$('input').val("");
	/*$('.answer').css('display','none');
	$('#icon_answer').removeClass();
	$('.unknown').css('display','none');
	var x = $('.answer').length;
	for (var i = 0; i < x; i++) {
		$('.span-'+i+'').css('display','none');
		$('.span-'+i+'').removeClass().addClass('span-'+i+'');
	};*/
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
	/* Обработчик клика по кнопке настроек */
	$('.gear').click(function(event) {
		switchSettings();
		if (switch_settings) {
			settingsFunctionOn();
		} else {
			clearAnswer();
			settingsFunctionOff();
		}
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