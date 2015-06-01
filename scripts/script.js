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
});