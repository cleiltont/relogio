var tempoElement = document.getElementById('tempo');

var horasElement = document.querySelector('input[name=horas]');
var minutosElement = document.querySelector('input[name=minutos]');
var segundosElement = document.querySelector('input[name=segundos]');	
var milisegElement = document.querySelector('input[name=milisegundos]');

var diaElement = document.querySelector('input[name=dia]');

setInterval(() => {
	var data = new Date();
	horasElement.value = data.getHours() + ' hrs';
	minutosElement.value = data.getMinutes() + ' min';
	segundosElement.value = data.getSeconds() + ' seg';
	milisegElement.value = data.getMilliseconds() + ' ms';
}, 1);
