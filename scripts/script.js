var interval = 2000;
var interval_mini = 10;
var firstVisit;

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
/* ================================== */
function mainFunction() {
	$('#welcome_text').css("display","none");
	$('#search').css("display","block");
	setTimeout(mainFunction_2, interval_mini);
}
function mainFunction_2() {
	$('#search').css("opacity","1");
}
/* ================================= */
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
/* ================================= */
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

$(function() {
	firstVisit = $.cookie('firstVisit');
	if (firstVisit == 'true') {
		console.log("Опытный!")
		setTimeout(mainFunction, 500);
		//setTimeout(startFunction, 500);
	} else {
		console.log("Первый раз, как в первый класс!")
		$.cookie('firstVisit', 'true');
		setTimeout(startFunction, 500);
	}
	/**************************/
	$('input').focus(function(){
		$('.logo').css({'width':'100px','height':'100px'})
	});
	$('input').blur(function(){
		$('.logo').css({'width':'200px','height':'200px'})
	});
	/**************************/
	$('a.check').click(function(event) {
		var entered_text = $('input').val();
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
	});
	/***************************/
	$('a.try-again').click(function(event) {
		//$('#answer').children().fint().css('display','none');
		$('input').val("");
		setTimeout(againFunction, interval_mini);
	});
});