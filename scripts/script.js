var interval = 1000;
var interval_mini = 100;

function startFunction() {
	$('span:eq(0)').css("opacity","1");
	setTimeout(startFunction_2, interval);
}
function startFunction_2() {
	$('span:eq(0)').css("opacity","0");
	setTimeout(startFunction_3, interval);
}
function startFunction_3() {
	$('span:eq(0)').css("display","none");
	$('span:eq(1)').css("display","block");
	$('span:eq(1)').css("opacity","1");
	setTimeout(startFunction_4, interval);
}
function startFunction_4() {
	$('span:eq(1)').css("opacity","0");
	setTimeout(startFunction_5, interval);
}
function startFunction_5() {
	$('span:eq(1)').css("display","none");
	$('#search').css("display","block");
	setTimeout(startFunction_6, interval_mini);
}
function startFunction_6() {
	$('#search').css("opacity","1");
}

$(function() {
	setTimeout(startFunction, 500);
});